
const statements= {
    _firstStatement: [
        'worst', 'best', 'most interesting', 'least interesting', 'real deal', 'best thing', 'most dissappointing', 'most anticipated', 'funnier', 'saddest'
    ],
    _secondStatement: [
        'videogame', 'experience', 'piece of art', 'art representation', 'piece of crap'
    ],
    _thirdStatement: [
        'Uncharted', 'God of War', 'God of War: Ragnarok', 'Spider-man', 'The Last Of Us: Part 1', 'The Last Of Us: Part 2', 'The Last Of Us: Part 3', 'Rocket League', 'Rainbow Six: Siege'
    ],

}

function createMessage(statements){
    const array = [];    
    array.push('The ' + statements._firstStatement[Math.floor(Math.random() * statements._firstStatement.length)]);
    array.push(', surprising ' + statements._secondStatement[Math.floor(Math.random() * statements._secondStatement.length)]);
    array.push(' of this era is definitely ' + statements._thirdStatement[Math.floor(Math.random() * statements._thirdStatement.length)]);
    message = array.join('');
    console.log(message);

}

createMessage(statements);