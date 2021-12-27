const posts = [
    {
        id:"1",
        tag:"Some Tag",
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        pariatur distinctio ut ab aperiam officia.`,
        user:{
            name:"Some Name",
            email:"name@gmail.com",
            image:"https://images.unsplash.com/photo-1640577467391-0b323fc49c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        image:"https://images.unsplash.com/photo-1640577467391-0b323fc49c33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        id:"2",
        tag:"Some Tag",
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        pariatur distinctio ut ab aperiam officia.`,
        user:{
            name:"Some Name",
            email:"name@gmail.com",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        image:"https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM="
    },
    {
        id:"3",
        tag:"Some Tag",
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        pariatur distinctio ut ab aperiam officia.`,
        user:{
            name:"Some Name",
            email:"name@gmail.com",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        image:"https://images.unsplash.com/photo-1640590272119-e2c936055d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id:"4",
        tag:"Some Tag",
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        pariatur distinctio ut ab aperiam officia.`,
        user:{
            name:"Some Name",
            email:"name@gmail.com",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        image:"https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM="
    },
    {
        id:"4",
        tag:"Some Tag",
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        pariatur distinctio ut ab aperiam officia.`,
        user:{
            name:"Some Name",
            email:"name@gmail.com",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        image:"https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM="
    },
    {
        id:"4",
        tag:"Some Tag",
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        pariatur distinctio ut ab aperiam officia.`,
        user:{
            name:"Some Name",
            email:"name@gmail.com",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        image:"https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM="
    },
    {
        id:"4",
        tag:"Some Tag",
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        pariatur distinctio ut ab aperiam officia.`,
        user:{
            name:"Some Name",
            email:"name@gmail.com",
            image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        image:"https://media.istockphoto.com/photos/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-picture-id1292038829?b=1&k=20&m=1292038829&s=170667a&w=0&h=L8DhcSOFS3BZdCHN6ldjumqQBw0J2kk7mBagO5io5jM="
    },
   
]


export default posts