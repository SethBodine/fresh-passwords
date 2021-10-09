# Fresh Passwords
##### Formally/forked from passwds.ninja

Just an updated version of passwds.ninja for use when you need a password quickly and without fuss.

Nothing fancy - just a website for passwords at [pass.insecure.co.nz](https://pass.insecure.co.nz)

## Tweaks to configuration
Password Length and complexity tweaked to accomodate newer password lengths 
### Updates made to original source
#### Updated jQuery and Boostrap
- [jquery](https://developers.google.com/speed/libraries#jquery) from 1.11.3 to 3.6.0
- [bootsrap](https://getbootstrap.com/docs/3.3/getting-started/) from 3.3.5 to 3.3.7

### Improvements taken from other forks

atoponce commit 422742e57909e8cb60cc0a27f0f1c25f5fbdfbba
```javascript
function unbiasedRandom(size) {
    var min;
    var rand = new Uint32Array(1);

    const mycrypto = window.crypto || window.msCrypto;

    size >>>= 0; // ensure `size' is a 32-bit integer

    // force the range of [`min', 2**32) to be a multiple of `size'
    min = (-size >>> 0) % size;

    do { mycrypto.getRandomValues(rand); } while (rand[0] < min);

    return rand[0] % size;
}
\<snip\>
password += possible.charAt(unbiasedRandom(possible.length));
\</snip\>
```

mir123 commit fc2448431ffa47296e7990fca79e61fbf7ef211b and 0c4e9a05da5073e49e586c212dd1a9a6c7ef57c0

```javascript
chars['l'] = 'yyuuuoooooooiiiiiiieeeeeeeeeeeeaaaaaaaayyuuuoooooooiiiiiiieeeeeeeeeeeeaaaaaaaabbbcccccddddddddffffgggghhhhhhhhhhhhjkkllllllllmmmmnnnnnnnnnnnnppppqrrrrrrrrrrssssssssssssttttttttttttttttttvvwwwwxyyyyz';
chars['v'] = 'yyuuu0oooooo1iiiiii3eeeeeeeeeee4aaaaaaayyuuuoooooooiiiiiiieeeeeeeeeeeeaaaaaaaa' 
chars['c'] = 'bbbcccccddddddddffffgggghhhhhhhhhhhhjkkllllllllmmmmnnnnnnnnnnnnppppqrrrrrrrrrrssssssssssssttttttttttttttttttvvwwwwxyyyyz';          
```

### New Features
Allow for the following arguments to be supplied
- n [int] number of passwords to be generates (10 - 100)
- f [str] new format (will also adjust the length of the passwords)

#### Options for format

- l = a-z
- U = A-Z
- v = lower vowels
- V = upper vowels
- c = lower consonants
- C = upper consonants
- 9 = 0-9
- \# - Special chars 
- a - lower vowels including numbers
- A - upper vowels including numbers

##### Example 1.

f=Cvccvc99

example password: "Hatjan77"

##### Example 2.
f=aCcVvCc99##99A

example password: "hBwUeZh00@ 46T"

These are ignored if invalid or if the password format is shorter than 12 chars

### Known Issues
- CSS formatting
