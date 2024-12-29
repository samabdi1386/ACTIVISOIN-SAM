(function app(){

    const USER_LIST = [
        {id:1, userName:'baran' , pass: '123456'},
        {id:2, userName:'taghi' , pass: '123456'},
        {id:3, userName:'hassan' , pass: '123456'},
        {id:4, userName:'sam' , pass: '123456'},
        {id:5, userName:'javad' , pass: '123456'},
        {id:6, userName:'reyhaneh' , pass: '123456'},
        {id:7, userName:'fariba' , pass: '123456'},
        {id:8, userName:'nasrin' , pass: '123456'},
        {id:9, userName:'marzieh' , pass: '123456'},
        {id:10, userName:'farhad' , pass: '123456'},
        {id:11, userName:'faramarz' , pass: '123456'},
        {id:12, userName:'reza' , pass: '123456'},
        {id:13, userName:'kiyomars' , pass: '123456'},
    ]


    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = document.getElementById('email');
        const pass = document.getElementById('pass');
        const user = USER_LIST.filter( item => item.userName.toLowerCase () === email.value.toLowerCase().trim());

        if (user.length && pass.value === user[0].pass){
            console.log('login success');
            alert(" was registered")
            localStorage.setItem('user-name',JSON.stringify(user[0].userName))

            setTimeout(()=>{
                navigation.navigate('./about us.html')
            }, 2000);
            
        }else{
            console.log('invalid credentials');
            alert("  The password or email is incorrect")

        }
    }
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click',handleSubmit )
})()