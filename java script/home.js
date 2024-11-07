function validate(){

    let flag_variable=true;

    if(document.getElementById('name').value==''){
        document.getElementById('namewarning').style.display='inline-block';
        flag_variable=false;
    }
    else{
        document.getElementById('namewarning').style.display='none';
    }

    if(document.getElementById('email').value==''){
        document.getElementById('emailwarning').style.display='inline-block';
        flag_variable=false;
    }
    else{
        document.getElementById('emailwarning').style.display='none';
    }
    

    if(document.getElementById('password').value==''){
        document.getElementById('passwordwarning').style.display='inline-block';
        flag_variable=false;
    }
    else{
        document.getElementById('passwordwarning').style.display='none';
    }


    if(document.getElementById('textarea').value==''){
        document.getElementById('textareawarning').style.display='inline-block';
        flag_variable=false;
    }
    else{
        document.getElementById('textareawarning').style.display='none';
    }


    let radio = document.getElementsByName('gender');
    // console.log(radio);
    let is_radio_checked = false;
    for(let i = 0; i<radio.length;i++){
        if(radio[i].checked){
            is_radio_checked = true;
            break;
        }
         
    }
    if(!is_radio_checked){
        document.getElementById('genderwarning').style.display= 'inline-block' ; 
        flag_variable = false; 
    }
    else{
        document.getElementById('genderwarning').style.display= 'none' ;
    }
    
    let hobbies = document.getElementsByName('hobby');
    // console.log(hobbies);
    let is_hobbie_checked = false;
    for(let i=0;i<hobbies.length;i++){
        if(hobbies[i].checked){
            is_hobbie_checked = true;
            break;
        }
    }

    if(!is_hobbie_checked){
        document.getElementById('checkboxwarning').style.display = 'block' ;
        flag_variable = false;
    }else{
        document.getElementById('checkboxwarning').style.display = 'none' ;
    }
    
    if(flag_variable == false){
        return false
        // alert("Form submitted successfully");
    }

}