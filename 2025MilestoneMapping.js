const goals = {
    1: {
        title: "GRADUATE OPPORTUNITIES: Secure a Graduate Scheme by Q2 2025, starting September 2025",
        routineGoals: [
            { text: "Read 2 finance news articles per day", emoji: "" },
            { text: "Apply for 2 jobs per week", emoji: "" },
            { text: "Listen to one market-focused podcast weekly", emoji: "" },
        ],
        milestones: [
            "Reach interview standard by February",
            "Attend 2 assessment centres by March",
            "Secure a graduate role by April",
            "Start role by September",
        ],
    },
    2: {
        title: " MONEY MANAGEMENT: Save £5,000 for an Emergency Fund",
        routineGoals: [
            { text: "Limit fast food orders to once a month", emoji: "" },
            { text: "Cap discretionary spending at £50/month", emoji: "" },
            { text: "Work three student ambassador shifts per semester", emoji: "" },
        ],
        milestones: [
            "Review and optimise ISA account in Q2 2025",
            "Create a budget for saving £500/month once the graduate role begins",
            "Gradually build on savings over the year",
        ],
    },
    3: {
        title: "HEALTH AND WELLNESS: Hit goal weight of 65kg by August 2025",
        routineGoals: [
            { text: "Exercise six days a week (cardio/strength)", emoji: "" },
            { text: "Hit 10,000 steps daily", emoji: "" },
            { text: "Drink 2 litres of water daily", emoji: "" },
            { text: "Eat three servings of fruits/vegetables daily", emoji: "" },
            { text: "Sleep 8 hours nightly with consistent times", emoji: "" },
            { text: "Reduce sugar and coffee intake", emoji: "" },
        ],
        milestones: [
            "Hit 75kg by February",
            "Hit 70kg by May",
            "Hit 65kg by August",
            "Maintain 65kg for the remainder of 2025",
        ],
    },
    4: {
        title: "RESEARCH PROJECT: Achieve a First-Class Grade in Financial Engineering Dissertation",
        routineGoals: [
            { text: "Stay updated on emerging research in the chosen topic area", emoji: "" },
        ],
        milestones: [
            "Decide on Title and Thesis by February",
            "Read two topic-focused books for general research by April",
            "Network with industry professionals on the topic by June 2025",
            "Gather data and complete analysis by June 2025",
            "Write 2,000 words weekly from July to August",
            "Write and review drafts of dissertation by ~September",
            "Submit dissertation on time",
        ],
    },
    5: {
        title: "DISTINCTION, MSC: Achieve a Distinction for Your Master's Degree",
        routineGoals: [
            { text: "Attend 90% of lectures and actively participate", emoji: "" },
            { text: "Review notes within 24 hours of class to reinforce learning", emoji: "" },
            { text: "Dedicate 1 hour daily to flashcards or active recall for key topics", emoji: "" },
            { text: "Solve 10-15 additional problems weekly from past assignments/exams from February", emoji: "" },
            { text: "Complete one mock test per week from February", emoji: "" },
            { text: "Complete 2-3 mock exams weekly from March", emoji: "" },
            { text: "Revise one module per week comprehensively, covering notes, flashcards, and past papers from March", emoji: "" },
        ],
        milestones: [
            "Ensure that your ‘basic’ mathematics and statistics knowledge is solid by February",
            "Achieve a first class in all courseworks by April",
            "Finalise study materials by early April",
            "Complete 14 mock exams by end of April",
            "Complete final module revision by Mid-May",
            "Sit all exams in May, maintaining good mental health and emotional stability",
            "Submit your dissertation in September",
        ],
    },
    6: {
        title: "FRIENDSHIPS: Make Five More Genuine Friendships This Year",
        routineGoals: [
            { text: "Attend one university social activity weekly", emoji: "" },
            { text: "Check in with one friend weekly", emoji: "" },
        ],
        milestones: [
            "Complete a 30-Day social media fast in January",
            "Attend three social events by March 2025",
            "Join at least one society",
            "Host or organise one social gathering by September 2025",
        ],
    },
    7: {
        title: "FAITH: Practice Mindfulness and Scripture, Breaking Old Habits and Starting A Fresh",
        routineGoals: [
            { text: "Attend church every Sunday", emoji: "" },
            { text: "Read one chapter of scripture daily", emoji: "" },
            { text: "Pray every morning and evening", emoji: "" },
            { text: "Take faith-driven actions to overcome personal challenges", emoji: "" },
        ],
        milestones: [
            "Snap out of addiction, cold turkey by February 2025",
            "Commit to daily habits by February 2025",
            "Memorise five key scriptures or affirmations by April 2025",
            "Be 100% Clean by December 2025",
        ],
    },
    8: {
        title: "SELF-CONFIDENCE: Build Self-Confidence and Celebrate Progress",
        routineGoals: [
            { text: "Follow morning and evening skincare routines", emoji: "" },
            { text: "Stretch daily for 10 minutes to promote physical wellness", emoji: "" },
            { text: "Create a calming bedtime routine to ensure quality sleep", emoji: "" },
        ],
        milestones: [
            "Establish and Maintain a Skincare Routine by February",
            "Learn Natural Makeup Techniques by Summer",
            "Celebrate and reward personal milestones by September",
            "Demonstrate Self-Confidence Through Actions by December",
            "Post on Instagram by December",
        ],
    },
    9: {
        title: "WRITING PROJECT 1: Finish One Writing Project by Q2 2025",
        routineGoals: [
            {text:"Spend a few hours weekly storyboarding",emoji:""}
        ],
        milestones: [
            "Outline your project by February",
            "Write 10,000 words by March",
            "Complete the first draft by April",
            "Edit and refine your work by May",
            "Complete project by July",
        ],
    },
    10: {
        title: "WRITING PROJECT 2: Complete a Second Writing Project by Q4 2025",
        routineGoals: [
            {text:"Spend a few hours weekly storyboarding",emoji:""}
        ],
        milestones: [
            "Outline your project by July",
            "Write 10,000 words by August",
            "Complete the first draft by September",
            "Edit and refine your work by October",
            "Complete project by November",
        ],
    },
    11: {
        title: "DEVELOPMENTAL HABITS: Read 12 Books Over the Year",
        routineGoals: [
            { text: "Read for 30 minutes per day", emoji: "" },
        ],
        milestones: [
            "Finish 1 book by the end of January",
            "Finish 2 books by the end of February",
            "Finish 3 books by the end of March",
            "Finish 4 books by the end of April",
            "Finish 5 books by the end of May",
            "Finish 6 books by the end of June",
            "Finish 7 books by the end of July",
            "Finish 8 books by the end of August",
            "Finish 9 books by the end of September",
            "Finish 10 books by the end of October",
            "Finish 11 books by the end of November",
            "Finish 12 books by the end of December",
        ],
    },
};

const goalDetailsContainer = document.getElementById("goal-details");

function displayGoalDetails(goalId) {
    const goal = goals[goalId];
    
    if (!goal) {
        console.error(`Goal with ID ${goalId} not found`);
        return;
    }

    const routineGoalsHTML = goal.routineGoals.length
        ? goal.routineGoals.map(
            (rg, index) => `
                <li class="routine-goal">
                    <span>${rg.text}</span>
                    <div class="emoji-picker" data-goal-id="${goalId}" data-index="${index}">
                        <select class="emoji-dropdown">
                            <option value="♻️" ${rg.emoji === "♻️" ? "selected" : ""}>♻️</option>
                            <option value="💤" ${rg.emoji === "💤" ? "selected" : ""}>💤</option>
                            <option value="🏃🏾‍♀️" ${rg.emoji === "🏃🏾‍♀️" ? "selected" : ""}>🏃🏾‍♀️</option>
                            <option value="💭" ${rg.emoji === "💭" ? "selected" : ""}>💭</option>
                        </select>
                    </div>
                </li>
            `
        ).join('')
        : "<p>No routine goals set for this target.</p>";

    const milestonesHTML = goal.milestones.length
        ? goal.milestones.map(
            (milestone, index) => `
                <li class="milestone ${index === 0 ? 'revealed' : 'hidden'}" data-index="${index}">
                    ${milestone}
                    <div class="arrow"></div>
                </li>
            `
        ).join('')
        : "<p>No milestones set for this target.</p>";

    goalDetailsContainer.innerHTML = `
        <h2>${goal.title || "No Title Available"}</h2>
        <h3>Routine Goals</h3>
        <ul>${routineGoalsHTML}</ul>
        <h3>Milestone Goals</h3>
        <ul id="milestones-list" class="milestones">${milestonesHTML}</ul>
    `;

    displayMilestones(goalId);
    addEmojiListeners();
}

function addEmojiListeners() {
    document.querySelectorAll(".emoji-dropdown").forEach((dropdown) => {
        dropdown.addEventListener("change", () => {
            const goalId = dropdown.parentElement.dataset.goalId;
            const index = dropdown.parentElement.dataset.index;
            const selectedEmoji = dropdown.value;

            goals[goalId].routineGoals[index].emoji = selectedEmoji;
            saveProgress(goalId);
        });
    });
}

function saveProgress(goalId) {
    localStorage.setItem("goals", JSON.stringify(goals));
}

function loadProgress() {
    const savedGoals = JSON.parse(localStorage.getItem("goals"));
    if (savedGoals) {
        Object.assign(goals, savedGoals);
        displayGoalDetails(1); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadProgress();

    document.querySelectorAll(".goal").forEach((goalElement) => {
        goalElement.addEventListener("click", () => {
            const goalId = goalElement.dataset.goalId;
            displayGoalDetails(goalId);
        });
    });
});

function displayMilestones(goalId) {
    const milestones = document.querySelectorAll(".milestone");

    if (milestones.length > 0) {
        milestones[0].classList.remove("hidden");
        milestones[0].classList.add("revealed");
    }

    milestones.forEach((milestone, index) => {
        milestone.addEventListener("click", () => {
            milestone.classList.toggle("completed");

            if (milestone.classList.contains("completed")) {
                const nextMilestone = document.querySelector(
                    `.milestone[data-index="${index + 1}"]`
                );
                if (nextMilestone) {
                    nextMilestone.classList.remove("hidden");
                    nextMilestone.classList.add("revealed");
                }
            } else {
                let nextMilestone = document.querySelector(
                    `.milestone[data-index="${index + 1}"]`
                );
                while (nextMilestone) {
                    nextMilestone.classList.add("hidden");
                    nextMilestone.classList.remove("revealed");
                    nextMilestone = document.querySelector(
                        `.milestone[data-index="${parseInt(nextMilestone.dataset.index) + 1}"]`
                    );
                }
            }

            if (milestones[milestones.length - 1].classList.contains("completed")) {
                showResolutionCompleted(goalId);
            }

            saveProgress(goalId);
        });
    });
}

function showResolutionCompleted(goalId) {
    let completedMessage = document.querySelector(`#completedMessage-${goalId}`);
    if (!completedMessage) {
        completedMessage = document.createElement("div");
        completedMessage.id = `completedMessage-${goalId}`;
        completedMessage.innerText = "RESOLUTION COMPLETED";
        completedMessage.style.color = "green";
        completedMessage.style.fontWeight = "bold";
        completedMessage.style.marginTop = "20px";
        completedMessage.style.fontSize = "1.5rem";  
        completedMessage.style.textAlign = "center";  
        completedMessage.style.width = "100%";  
        completedMessage.style.padding = "10px";  

        const rhsDetails = document.querySelector(".rhs-details");
        rhsDetails.appendChild(completedMessage);
    }
}

function saveGoalState(goalId, isCompleted) {
    localStorage.setItem(goalId, isCompleted);
}

function loadGoalState() {
    const goals = document.querySelectorAll('.goal');
    goals.forEach(goal => {
        const goalId = goal.id;
        const isCompleted = localStorage.getItem(goalId) === 'true';
        
        goal.style.textDecoration = isCompleted ? 'none' : 'none';
    });
}

function toggleGoalCompletion(event) {
    const goal = event.target;
    const goalId = goal.id;
    const isCompleted = goal.style.textDecoration === 'none';

    goal.style.textDecoration = isCompleted ? 'none' : 'none';
    saveGoalState(goalId, !isCompleted);
}

document.querySelectorAll('.goal').forEach(goal => {
    goal.addEventListener('click', toggleGoalCompletion);
});

window.onload = loadGoalState;
