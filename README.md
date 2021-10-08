# Fresh Passwords
##### Formally/forked from passwds.ninja

Just an updated version of passwds.ninja for use when you need a password quickly and without fuss.

Nothing fancy - just a website for passwords at [pass.insecure.co.nz](https://pass.insecure.co.nz)

## Tweaks to configuration
Password Length and complexity tweaked to accomodate newer password lengths 

## Updates made to original source
### Updated jQuery and Boostrap
- [jquery](https://developers.google.com/speed/libraries#jquery)
- [bootsrap](https://getbootstrap.com/docs/3.3/getting-started/)

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
- # - Special chars 
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
