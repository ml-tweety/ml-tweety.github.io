var base_url = "http://127.0.0.1:5500";

function navbar() {
  document.write(`
    <nav class="navbar navbar-expand-custom navbar-mainbg">
    <a class="navbar-brand navbar-logo" href="#">TimeToTop</a>
    <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="fas fa-bars text-white"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li class="nav-item active">
                <a class="nav-link" href="javascript:void(0);"><i class="fas fa-home"></i>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="javascript:void(0);"><i class="far fa-address-book"></i>Contact-Us</a>
            </li>
        </ul>
    </div>
</nav>`);
}
function section_1() {
  document.write("Sec 1");
}

function ads() {
  document.write(
    '<div class="d-flex justify-content-center ad-div"><img src="' +
      base_url +
      '/res/imgs/ads/ad_placeholder.png" class="img-fluid ad-type-box" alt="advertisement" /></div>'
  );
}
function ads_midquestion_position(){
  which_ad = Math.floor(Math.random() * 11);
  return which_ad;
}
function ads_midquestion() {
  document.write("Mid Page Ads.");
}
function baseurl() {
  window.location.replace(base_url);
}

function showmsg(msg){
  Swal.fire({
    // title: 'Error!',
    text: msg,
    // icon: 'error',
    confirmButtonText: 'Ok'
  });
}

