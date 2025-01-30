let jokes = [
    "Why did the dosa refuse to share its chutney? It was a little chatpata about it!",
    "What do you call a lazy Punjabi? Chillwindar Singh!",
    "Why did the auto-rickshaw driver go to school? To learn some fare play!",
    "Why do South Indians never get lost? Because they always have their idli-tude right!",
    "What’s a Marwari's favorite exercise? Paise lifting!",
    "Why did the tomato turn red? Because it saw the mirchi!",
    "Why do Biharis never feel cold? Because they always carry their Litti jackets!",
    "Why do Indians love tea so much? Because life without chai is chai-otic!",
    "Why did the pani puri cry? Because it got too emotional!",
    "What did the mango say to the banana? You kela-nt be as sweet as me!",
    "Why do Gujaratis carry a spoon everywhere? In case they find undhiyu!",
    "Why don’t Tamilians play hide and seek? Because their dosas always break cover!",
    "What’s an IT engineer’s favorite snack? Bytes of samosa!",
    "Why did the Bollywood actor bring a ladder to the bar? Because he wanted high spirits!",
    "Why don’t Delhiites play cricket at night? Because there's too much traffic even on the pitch!",
    "Why did the roti blush? Because it saw the butter melting!",
    "Why do Indians never lose in chess? Because they always have a pawn shop nearby!",
    "What did the math-loving Bengali say? Ei baba! Too many problems!",
    "Why did the kurkure packet feel ignored? Because everyone was munching on the gossip instead!",
    "Why don’t Mumbai rains get invited to parties? Because they never know when to stop!",
    "Why did the chicken cross the road in India? To avoid getting caught in a traffic jam!",
    "Why did the laptop refuse to work? Because it needed some masala tea refresh!",
    "Why did the schoolboy take a lassi to class? Because he wanted to stay cool under pressure!",
    "Why do Punjabi weddings never end on time? Because everyone has to show their bhangra moves first!",
    "What did the biryani say to the pulao? You're too plain for my taste!",
    "Why do South Indians never run out of fuel? Because they always have extra dosa batter!",
    "Why did the Bollywood villain go to the gym? To work on his evil laugh abs!",
    "Why did the Indian uncle go viral? Because of his WhatsApp forwards!",
    "Why do Bengalis love fish so much? Because they think it's fin-tastic!",
    "Why did the mom ask her kid to finish the dahi? Because wasting food is a crime, beta!",
    "Why do Delhiites love winters? So they can finally wear their jackets without sweating!",
    "Why did the golgappa vendor break up with his girlfriend? Because she was too salty!",
    "What do you call a confused South Indian? Idli-diot!",
    "Why do Indian parents love discounts? Because 'beta, paisa ped pe nahi ugta!'",
    "Why did the samosa feel sad? Because people always break it apart before eating!",
    "Why did the Indian cow become famous? Because it had a ‘legend-dairy’ story!",
    "Why do Indians add extra masala to everything? Because plain is just too mainstream!",
    "Why did the chaiwala get promoted? Because he always brewed good ideas!",
    "Why don’t Indian roads need speed breakers? Because the potholes already do the job!",
    "Why did the Bollywood hero bring a microphone to a fight? Because he wanted to sing before throwing punches!",
    "Why don’t Indian kids tell their parents they’re bored? Because they’ll be given a history book to read!",
    "Why do Indian grandparents never need Google? Because they have their own encyclopedia of knowledge!",
    "Why do desi moms always complain about the fridge? Because no matter how full it is, there's 'nothing to eat!'",
    "Why did the toothpaste feel lonely? Because everyone was busy eating sweets!",
    "Why did the Indian student bring a paratha to the exam? Because he needed some stuffing to handle the pressure!",
    "Why do Punjabis never lose a debate? Because their volume is always higher than the opponent's!",
    "Why do Indian aunties love shopping malls? Because discounts are their best friends!",
    "Why did the Bollywood movie have so many songs? Because emotions need extra screen time!",
    "Why do Indian dads always ask for the bill first? Because ‘paisa bachana bhi toh ek art hai!’"
];


//Generate random index number 
let i= Math.random()*50
i=Math.round(i)

//Method 1(without button )
//select the numbers jokes from this array
// document.write(jokes[i])

//Method 2(with button)
let btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    let i = Math.floor(Math.random() * jokes.length);
    alert(jokes[i]);
});


