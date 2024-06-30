exports.LoginUser = (req , res ) =>{
    const username = req.body.username;
    const password = req.body.password;
    if (!username  || !password   ){
        if(!username)
        return res.json({
            msg:"plase Enter your username",
            state: 0,
         });
         else
         return res.json({
            msg:"plase Enter your password",
            state: 0,
         });
    }
    
    if (username.trim() === "mohammed" && password.trim() ==="12345")
    return res.json({
           msg:"hellow mohammed",
           state: 1,
        });
    res.json({
        msg:"error",
        state:1,
    });
    
};
exports.SignUpUser = (req , res ) =>{
    const username = req.body.username;
    const password = req.body.password;
    const emil = req.body.emil;
    const phone = req.body.phone;
    if (!username  || !password  || !emil  || !phone )
    return res.json({
           msg:"plase Enter your data",
           state: 0,
        });
    if (username.trim() === "" || password.trim() === "" || emil.trim() === "" || phone.trim() === "")
    return res.json({
           msg:"plase Enter your data",
           state: 0,
        });
     
    res.json({
        msg:"prossec your succ",
        state:1,
    });

};