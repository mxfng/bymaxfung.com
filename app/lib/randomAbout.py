'''
Static data structure for dynamic info on the About page.

Stores data in tuples which can be accessed via the "random" functions.
'''

from random import choice

# Summon random action object
def random_action():
    return choice(random_actions)

# Summon random fact object
def random_fact():
    return choice(random_facts)

# random-action dataset
# "watch me ______ here"
random_actions = (
    'play the tuba',
    'climb Mt. Everest',
    'base jump',
    'address the haters',
    'sing badly',
    'bake a cake',
    'get icy',
    'swim in jello',
    '360 no-scope',
    'snore in bed',
    'crochet',
    'critique capitalism',
    'wear two left shoes',
    'give up on trying',
    'ride a unicycle',
    'fly a helicopter',
    'go to therapy',
    'cry profusely'
)

# random-fact dataset
random_facts = (
    (
        'Favorite Food',
        'Baja Fish Tacos'
    ),
    (
        'Where I Want to Move',
        'Amsterdam, NL'
    ),
    (
        'Favorite Guitar',
        'Fender Stratocaster'
    ),
    (
        'My Best Song',
        'All of them'
    ),
    (
        'Favorite National Park',
        'Yosemite, California, U.S.'
    ),
    (
        'Childhood TV Show',
        'SpongeBob Squarepants'
    ),
    (
        'DAW of Choice',
        'Logic Pro X'
    ),
    (
        'First Language',
        'Python'
    ),
    (
        'Middle Name',
        'Henry'
    ),
    (
        'Worst Grade in College',
        'Control Systems'
    ),
    (
        'Favorite Animal',
        'Dolphins'
    ),
    (
        'Least Favorite Thing',
        'Stroads'
    ),
    (
        'Go-To Drink',
        'Tequila Sprite'
    ),
    (
        'First DAW',
        'Reason 5'
    ),
    (
        'Favorite Color',
        'Green/Blue'
    ),
    (
        'Worst Food Eaten',
        'Jellyfish Tentacles'
    ),
    (
        'Dream Job',
        "I don't dream of work"
    ),
    (
        'High School Goal',
        'Be a Professional Rapper'
    ),
    (
        'Worst Purchase',
        '$300 A Bathing Ape jersey'
    ),
    (
        'Me in One Word',
        'Sensational'
    ),
    (
        'Favorite Word',
        'Copacetic'
    ),
    (
        'Worst Human Invention',
        'Nuclear Bombs'
    ),
    (
        'Biggest Regret',
        'I have none'
    )
)