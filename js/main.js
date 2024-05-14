// Get references to the HTML elements
const storyTextElement = document.getElementById('story-text');
const choice1Button = document.getElementById('choice1');
const choice2Button = document.getElementById('choice2');


// Initial story state
let storyState = 0;

// Story content
const story = [
    {
        text: "Knight Mansion",
        choices: ["Start Game", "Quit"]
    },
    {
        text: "The fog rolls off the Thames, enveloping the narrow streets of Victorian London in a damp, misty haze. You make your way through the muggy cobblestone alleys, your mind focused on the task at hand, a murder. The late Knight family witnessed a massacre at the manor, you have been entrusted to solve the case.",
        choices: ["The Game is Afoot", "Go back"]
    },
    {
        text: "As the moon casts its eerie glow over the old mansion, the piercing echo of screams shatters the midnight silence, sending a chill down your spine. Towering gothic gargoyles adorn the cobwebbed doors following your footsteps as you step toward the entrance of the crumbling relic. As you approach the entrance, the door creaks open with a groan, illuminating an eerie foyer crawling with shadows. ",
        choices: ["Enter the mansion", "Leave"]
    },
    {
        text: "With feather light steps, you cautiously weigh your surroundings. The chandelier glints towards the great hall standing at the center of the manor. A winding staircase to the left sweaps around the great hall, leading to the Knight family chambers. A hallway to the right sparkles with the faint gleam of steel indicating an armory. Your heart thumps in your chest as you decide which path you shall choose.",
        choices: ["Great Hall", "Armory"]
    },
    {
        text: "As you make your way down the hallway, the glint of swords points to a door adorned with ornate knights in armor. The door stands slightly ajar the air thick with suspision. Rows of once gleaming suits of armor now lie dormant in a tarnished slumber. Your eyes gaze across the room falling upon a single set of arms. An empty sheath stands next to the armor, a napkin hanging from it. The single sound of thick blood dripping from the napkin fills the room. You slowly examine the empty sheath and cloth. Engraved upon the napkin is the Knight family crest.",
        choices: ["Butler's Chambers", "Go"]
    },
    {
        text: "The Great Hall stands in gleaming perfection ready for the next event. You scan the room and at first nothing seems out of order. Silver utensils glint around a table circling the circumference of the room. Echoes of the previous dinner parties bounce from wall to wall. Following the echoes your eyes reach every corner of the hall before landing on trail of thick scarlet liquid. Blood. ",
        choices: ["Hidden Passage", "Go Back"]
    },

    
    // Add more story segments as needed
];

// Function to update the story text and choices
function updateStory() {
    storyTextElement.textContent = story[storyState].text;
    choice1Button.textContent = story[storyState].choices[0];
    choice2Button.textContent = story[storyState].choices[1];
}

// Event listeners for choice buttons
choice1Button.addEventListener('click', function() {
    // Handle choice 1
    if (storyState >= 0 && storyState < story.length) {
        const choice = story[storyState].choices[0];
        if (choice === "Armory") {
            // Go to a specific state
            storyState = 5; // Change to the desired state index
        } else if (choice === "Great Hall") {
            storyState = 5; 
        } else {
            // Advance the story
            storyState++;
        }
        updateStory(); // Update the story text and choices
    } else {
        // Handle other choices as needed
    }
});

choice2Button.addEventListener('click', function() {
    // Handle choice 2
    if (storyState >= 0 && storyState < story.length) {
        const choice = story[storyState].choices[1];
        if (choice === "Go back") {
            // Go back to the previous story state
            storyState--;
            
        } else if (choice === "Leave") {
            // Go to a specific state for "Open the door"
            storyState--; // Change to the desired state index
        
        } else {
            // Advance the story
            storyState++;
        }
        updateStory(); // Update the story text and choices
    } else {
        // Handle other choices as needed
    }
});


// Initialize the story
updateStory();