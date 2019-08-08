const postData = (body) => {
  return fetch('./server.php',{
    method:'POST',
    headers:{
      'Content-Type':'application/JSON'
    },
    body:JSON.stringify(body)
  })
}
export default postData;
