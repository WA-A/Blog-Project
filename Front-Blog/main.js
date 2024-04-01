const getUsers = async() => {
    const {data} = await axios.get(`https://blog-project-2-02xi.onrender.com/user/getuser`);
     console.log(data);
     return data.users;
};

const displayUsers = async()=>{
    const users = await getUsers();
    const result = users.map( user=>
        ` <div class='col-lg-4'>
        <h2>${user.name}</h2>
        </div>
        `
    ).join('');
    document.querySelector(".users .row").innerHTML=result;
    }

    displayUsers();

   