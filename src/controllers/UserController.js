const User=require("../models/users");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken"); 
const nodemailer = require("nodemailer");

module.exports={
    createuser: async (req, res) => {
      console.log('seleyem',req.body)
        const { role, email, password } = req.body;
    
        if (!role || !email || !password) {
          return res.status(400).json({ message: "Please enter all fields" });
        }
    if (role!="admin"){
      return res.status(403).json({ message: "Access Denied :only admin !" });
    }
        try {
          const user = await User.findOne({ email });
          console.log(user);
          if (user) throw Error("User already exists");
    
          // on utulise salt comme un clé pour le hachage
          const salt = await bcrypt.genSalt(10);
          if (!salt) throw Error("Something went wrong with bcrypt");
    
          const hash = await bcrypt.hash(password, salt);
          if (!hash) throw Error("Something went wrong hashing the password");
          
          const newUser = new User({
            role,
            email,
            password: hash,
          });
          console.log('seleyem',newUser)
          const savedUser = await newUser.save();
          if (!savedUser) throw Error("Something went wrong saving the user");
    
          /* const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
            expiresIn: 3600,
          }); */
    
          res.status(200).json({
            message: "user successfuly registred",
            user: savedUser,
          });
        } catch (e) {
          res.status(400).json({ error: e.message });
        }
      }
      ,
    login: (req, res) => {
        const { email, password } = req.body;
        // Simple validation
        if (!email || !password) {
          return res.status(400).json({ message: "Please enter all fields" });
        } else {
          User.findOne({ email: email }).then (  async (user) => {
            console.log("+++++++++++"+user)
            if (!user) {
              res.status(401).json({
                message: "user with this email does not exist",
              });
            } else {
              const isMatch = await bcrypt.compare(password, user.password);
    
              if (!isMatch) {
                res.status(400).json({
                  message: "invalid password",
                });
              } else {
                const token = jwt.sign({userId: user._id,role:user.role }, "secret",{noTimestamp:true,expiresIn:'1d'});
                console.log(token)
                console.log( jwt.verify(token, "secret"));
                res.status(200).json({
                  token: token,
                  userId: user._id,
                  userEmail:user.email,
                  userAvatar:user.avatar,

                });
              }
            }
          }).catch((error)=>{ 
            console.log(error)
            res.status(500).json({
            message: "sqlError",
          });
        });
        }
      },


      changePassword:(req,res)=>{
        const { oldPassword, newPassword } = req.body;
        // Simple validation
        if (!oldPassword || !newPassword) {
          return res.status(400).json({ message: "Please enter all fields" });
        } else {
          User.findById({ _id: req.user.userId  }).then (  async (user) => {
            console.log("+++++++++++"+user)
            if (!user) {
              res.status(401).json({
                message: "user with this email does not exist",
              });
            } else {
              const isMatch = await bcrypt.compare(oldPassword, user.password);
    
              if (!isMatch) {
                res.status(400).json({
                  message: "invalid password",
                });
              } else {
                const salt = await bcrypt.genSalt(10);
                if (!salt) throw Error("Something went wrong with bcrypt");
          
                const hash = await bcrypt.hash(newPassword, salt);
                if (!hash) throw Error("Something went wrong hashing the password");
                user.password=hash;
                const savedUser = await user.save();
                if (!savedUser) throw Error("Something went wrong saving the user");
                res.status(200).json({
                  message: "pasword succfully changed !",
                });
               
              }
            }
          }).catch((error)=>{ 
            console.log(error)
            res.status(500).json({
            message: "sqlError",
          });
        });
        }

      }
      ,
      
      forgotpassword: async (req, res) => {
        console.log("forgot")
        const { email } = req.body;
        if (!email){
          return res.status(400).json({ message: "Please enter all fields" });

        }
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "youtchyou@gmail.com",
              pass: "fbmb zrva nlxt bkhq",
            },
          });
    
          User.findOne({ email: email },).then(  async ( user) => {
            if (!user) {
              res.status(500).json({
                message: "user with this email does not exist",
              });
            }
    
            const token = jwt.sign({ id: user._id }, "secret", {
              expiresIn: "30m",
            });
    
            /*  user.resetPasswordToken = token;
            user.resetPasswordExpires = Date.now() + 3600000; // 1 heure
            await user.save();
    */
    
            const mailOptions = {
              from: "youtchyou@gmail.com",
              to:  user.email,
              subject: "Réinitialisation de votre mot de passe",
              text: `Bonjour,\n\nVous avez demandé à réinitialiser votre mot de passe. 
                     Veuillez cliquer sur le lien suivant ou le copier-coller dans votre navigateur
                     pour poursuivre le processus: 
                     \n\nhttp://localhost:3000/reset/${token}\n\n
                     Si vous n'avez pas demandé cette réinitialisation, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.\n`,
            
                    };
    
            transporter.sendMail(mailOptions, (err, response) => {
              if (err) {
                console.error(err);
    
                res.status(500).json({ message: "Error sending email" });
              } else {
                res.status(200).json({ message: "Email sent successfully" });
              }
            });
         });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: "Error resetting password" });
        }
      },
      resetpassword: async (req, res) => {
        const { password, confirmpassword } = req.body;
        //return res.status(200).json({"aze":req.params.token})
        console.log("reset")
        console.log("reset", req.query.token)
        let token = jwt.verify(req.query.token, "secret");
        let _id = token.id;
        if (!password||!confirmpassword){
          return res.status(400).json({ message: "Please enter all fields" });

        }
    
        try {
          User.findById({ _id} ).then (async ( user) => {
            if (!user) {
              res.status(500).json({
                message: "user not found ",
                data: null,
              });
            } else {
              if (password !== confirmpassword) {
                return res.status(422).json({
                  message: "validation error",
                  errors: {
                    details: [
                      {
                        path: ["confirm"],
                        message: "password does not match",
                      },
                    ],
                  },
                  success: false,
                });
              }
    
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(password, salt);
              user.password = hashedPassword;
              user.save();
              res.status(200).json({
                message: "Password updated successfully",
                data: user,
              });
            }
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Error Reset password" });
        }
      },
}
