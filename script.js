//var template = 'Cvccvc99';
var template = 'aCcVvCc99##99A'; // 14 Char Password

//number of passwords to output (min)
var numPasswords = 10;

//Check for custom arguments
const QueryString = window.location.search; 
const urlParams = new URLSearchParams(QueryString); 

// Validate argument n (number of passwords output)
if (urlParams.has('n')) {
  var tempn = Number(urlParams.get('n'));  
  if (!isNaN(tempn)) { 
    if ((tempn >=10) && (tempn <= 100)){
      numPasswords = tempn;
    }
  }
}
// validate a template formatting, and ensure that we're not being asked to generate bad/invalid passwords
if (urlParams.has('f')) {
  var tempf = urlParams.get('f');  
  if ((tempf.length >=12) && ((tempf.replace(/lUvVcC9WaA/g,'')).length == 0)) { 
    template = tempf;    
  }
}

function generatePasswords(template, number) {
    var chars = {}
    chars['l'] = 'abcdefghijklmnoprstuvwxyz';
    chars['U'] = chars['l'].toUpperCase();
    chars['v'] = 'aeiouy';
    chars['V'] = chars['v'].toUpperCase();
    chars['c'] = 'bcdfghjklmnprstvwxz';
    chars['C'] = chars['c'].toUpperCase();
    chars['9'] = '0123456789';
    //chars['#'] = '!@#$%^&*_-+=()[]{} ';
    chars['#'] = '@#_- .!/'; //Tweaking Specials to be a bit less unfun for systems
    chars['a'] = chars['l'] + chars['9'];
    chars['A'] = chars['a'].toUpperCase();

    var i, c, possible;

    var passwords = [];
    for (i = 0; i < number; i++) {
        password = '';
        var array = new Uint8Array(template.length)
        window.crypto.getRandomValues(array);
        for (c = 0; c < template.length; c++) {
            possible = chars[template.charAt(c)];
            password += possible.charAt(Math.floor(array[c] / 256 * possible.length));
        }
        passwords.push(password);
    }

    return passwords;
}

function doPasswords() {
  passwords = generatePasswords(template, numPasswords);

  var passwordlist = $("ul#passwords");
  $.each(passwords, function(i, password) {
      passwordlist.append($("<li>").text(password));
  });
  mixpanel.track("Generated passwords");
}

doPasswords();

$('#passwords').on('click', 'li', function() {
  var range = document.createRange();  
  range.selectNode(this);  
  window.getSelection().addRange(range);  
    
  var successful = false;
  try {  
    // Now that we've selected the anchor text, execute the copy command  
    successful = document.execCommand('copy');  
  } catch(err) {  
    successful = false;
    // whatever
  }

  if (!successful) {
      prompt("Your browser does not support insta-copy. Sorry.", $(this).text());
  }

  mixpanel.track("Claimed password");

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
});

function disableSelect(e) { return false; }
function reEnable() { return true; }
document.onselectstart=disableSelect;
if (window.sidebar){
    document.onmousedown=disableSelect
    document.onclick=reEnable
}

$('.more').on('click', function() {
  $('#passwords li').remove();
  doPasswords();
  return false;
});
