const getUsers = async() => {
    const {data} = await axios.get(`https://blog-project-2-02xi.onrender.com/user/getuser`);
     console.log(data);
};

getUsers();