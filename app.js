


let features = document.getElementById('features');

function featureClose(){
    features.style.display = "none";
};

function generateCV(){

    features.style.display = "none";

    let template = document.getElementById('temp');
    let form = document.getElementById('data-collection-form');
    let headings = document.getElementById('headings');
    let headings_2 = document.getElementById('headings-2');

    template.style.display = "flex";
    form.style.display = "none";
    headings.style.display = "none";
    headings_2.style.display = "none";

    let firstname = document.getElementById('first-name').value;
    let secondname = document.getElementById('second-name').value;
    let setFirstName = document.getElementById('f-name');
    let setLastname = document.getElementById('l-name');
    
    setFirstName.innerHTML = firstname;
    setLastname.innerHTML = secondname;

    let phoneNum = document.getElementById('p-num').value;
    let emailAddress = document.getElementById('em').value;
    let setPhone = document.getElementById('get-phone');
    let setEmail = document.getElementById('get-email');

    setPhone.innerHTML = phoneNum;
    setEmail.innerHTML = emailAddress;

    const linkedin = document.getElementById("linkedin").value;
    const linkLinkedin = document.getElementById("linked");
    linkLinkedin.href = linkedin;
    const github = document.getElementById("github").value;
    const linkGitt = document.getElementById("gitt");
    linkGitt.href = github;
    const portfolio = document.getElementById("portfolio").value;
    const linkPortfolio = document.getElementById("folio");
    linkPortfolio.href = portfolio;

    document.getElementById('get-about').innerHTML = document.getElementById('about').value;

    document.getElementById('edu-10').innerHTML = document.getElementById('name-10').value;
    document.getElementById('school-10').innerHTML = document.getElementById('marks-10').value;
    document.getElementById('edu-12').innerHTML = document.getElementById('name-12').value;
    document.getElementById('school-12').innerHTML = document.getElementById('marks-12').value;
    document.getElementById('edu-uni').innerHTML = document.getElementById('name-U').value;
    document.getElementById('school-uni').innerHTML = document.getElementById('marks-U').value;

    document.getElementById('get-s1').innerHTML = document.getElementById('skil-1').value;
    document.getElementById('get-s2').innerHTML = document.getElementById('skil-2').value;
    document.getElementById('get-s3').innerHTML = document.getElementById('skil-3').value;
    document.getElementById('get-s4').innerHTML = document.getElementById('skil-4').value;
    document.getElementById('get-s5').innerHTML = document.getElementById('skil-5').value;
    document.getElementById('get-s6').innerHTML = document.getElementById('skil-6').value;
    document.getElementById('get-s7').innerHTML = document.getElementById('skil-7').value;
    document.getElementById('get-s8').innerHTML = document.getElementById('skil-8').value;
    document.getElementById('get-s9').innerHTML = document.getElementById('skil-9').value;
    document.getElementById('get-s10').innerHTML = document.getElementById('skil-10').value;

    document.getElementById('proj-1-name').innerHTML = document.getElementById('proj1-name').value;
    document.getElementById('proj-1-desc').innerHTML = document.getElementById('proj1-desc').value;
    document.getElementById('proj-2-name').innerHTML = document.getElementById('proj2-name').value;
    document.getElementById('proj-2-desc').innerHTML = document.getElementById('proj2-desc').value;
    document.getElementById('proj-3-name').innerHTML = document.getElementById('proj3-name').value;
    document.getElementById('proj-3-desc').innerHTML = document.getElementById('proj3-desc').value;

};

function downloadCV() {
    window.print();
};