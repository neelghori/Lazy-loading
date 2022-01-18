//fetch api 
const displayCard=document.getElementById('serviceone');
const loading = document.querySelector('.loading');

let post_number=0;

let result;

getData();
getData();
getData();
getData();
getData();
getData();

window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	if(clientHeight + scrollTop >= (scrollHeight-2)) {
		loadData();
	}
    console.log(clientHeight,scrollHeight);
});

function loadData() {
    if(post_number < result.length){
        loading.classList.add('show');
        setTimeout(getData, 1000)
      }
}
async function getData(){
    const response=await fetch('https://api.github.com/users?since=500');
     result=await response.json();
   if(post_number < result.length){
    appendData(result[post_number]);
    //console.log(result[post_number]);
    post_number++;
  }   
}
const appendData=(data)=>{
        const htmlElement=` <div class="col-md col-lg-4 col-md-6 col-12 pb-4">
        <div class="card bg-white text-light serviceoo">
            <div class="card-body text-center">
                <div class="h1 mb-3">
                    <img loading="lazy" src=${data.avatar_url} alt=${data.id} class="img-fluid" >
                </div>
                <h3 loading="lazy" class="card-title text-dark text-capitalize mb-3">
                    ${data.login}
                </h3>
               
            </div>
        </div>
      </div>  
      `; 
      displayCard.insertAdjacentHTML('beforeend',htmlElement);
      loading.classList.remove('show');
}




