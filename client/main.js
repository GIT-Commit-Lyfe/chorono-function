



function execute(){

  let array = []
  //let mySpanElements = document.getElementsByClassName("mydata")
  let mySpanElements =  document.querySelectorAll("span:not([class])")
  //console.log(mySpanElements)
  for (const span of mySpanElements) {
    array.push(span.innerText.split(" (")[0])
  }

  console.log(array)

  axios({
    method : "post",
    url : "http://localhost:3005/write",
    data : {
      array,
      title : document.getElementById("brand").value
    }
  })
  .then(result=> {
    alert("success")
  })
  .catch(err=>{
    alert("error")
  })
}