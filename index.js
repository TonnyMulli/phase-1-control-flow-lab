function scuberGreetingForFeet(sample){
  if (sample <= 400)
    {return 'This one is on me!';}
  else if (sample > 400 && sample <= 2000)
    {return 'That will be twenty bucks.';}
  else if (sample > 2000 && sample <= 2500)
    {return 'I will gladly take your thirty bucks.'}
  else
    {return 'No can do.'}
}

function ternaryCheckCity(NYC){
  return NYC === 'NYC'? 'Ok, sounds good.':'No go.';
  // Write your code here!
}

function switchOnCharmFromTip(money){
  switch (money) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';}
  // Write your code here!
}