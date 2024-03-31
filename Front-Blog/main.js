const getUsers = async() => {
    const {data} = await axios.get(`localhost:4000/user/getuser`);
     console.log(data);
};

getUsers();