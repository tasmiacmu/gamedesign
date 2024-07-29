document.getElementById('generateBtn').addEventListener('click', generateAU);

function generateAU() {
    const relationships = ['Childhood friends', 'Friends', 'Strangers', 'Enemies', 'Co-workers', 'Rivals', 'Neighbors'];
    const gegeStatuses = ['Kenji is older.', 'Indy is older.', 'They\'re the same age.'];
    const sexualIdentities = [
        'Indy doesn\'t know he\'s bi.',
        'Kenji isn\'t out as gay.',
        'Neither Kenji nor Indy are out as queer.',
        'Both Kenji and Indy are out as queer.'
    ];

    const relationshipTropes = [
        'Arranged Marriage', 'Enemies to Lovers', 'Friends to Lovers', 'Hallmark', 'Forbidden Love', 'Soulmates', 
        'Love at First Sight', 'Second Chance'
    ];
    
    const otherTropes = [
        'Amnesia', 'Blind Date', 'It\'s for the mission', 'The Bet', 'Jealousy', 'Love Potion/Love Spell', 
        'Sharing a Bed', 'Forced Proximity', 'Soulbond', 'Telepathy', 'Tsundere', 'Undercover/Fake', 'Body Swap', 
        'Time Travel', 'Dreams', 'Power Dynamics', 'Cursed'
    ];

    const auList = [
        'Rags to Riches AU', 'Trapped in a Game AU', 'Secret Royalty AU', 'Tattoo Artist x Florist AU', 'Reality Show AU', 
        'Sugar Daddy AU', 'Flight Attendants AU', 'Online Dating AU', 'College AU', 'Pirates AU', 'Ballerina AU', 
        'Yoga Studio AU', 'Detective Agency AU', 'Robot x Human AU', 'Photographer x Model AU', 'Chef x Food Critic AU', 
        'Teacher x Single Parent AU'
    ];

    const relationship = relationships[Math.floor(Math.random() * relationships.length)];
    const gegeStatus = gegeStatuses[Math.floor(Math.random() * gegeStatuses.length)];
    const sexualIdentity = sexualIdentities[Math.floor(Math.random() * sexualIdentities.length)];

    const randomRelationshipTrope = relationshipTropes[Math.floor(Math.random() * relationshipTropes.length)];
    const randomOtherTropes = [
        otherTropes[Math.floor(Math.random() * otherTropes.length)],
        otherTropes[Math.floor(Math.random() * otherTropes.length)]
    ];

    const tropes = [randomRelationshipTrope, ...randomOtherTropes].join(', ');
    const randomAU = auList[Math.floor(Math.random() * auList.length)];

    document.getElementById('relationship').textContent = relationship;
    document.getElementById('gegeStatus').textContent = gegeStatus;
    document.getElementById('sexualIdentity').textContent = sexualIdentity;
    document.getElementById('tropes').textContent = tropes;
    document.getElementById('auList').textContent = randomAU;
    document.getElementById('auList').style.display = 'block'; // Ensure the AU list is visible
}
