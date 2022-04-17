export let tasks = [
    {   
        id: 0,
        name: 'Shopping list',
        created: 'April 20, 2021',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '',
        isActive: true,
    },
    {   
        id: 1,
        name: 'The theory of evolution',
        created: 'April 27, 2021',
        category: 'Random Thought',
        content: `Evolution is the change in the characteristics of a species over several generations and relies on the process of natural selection`,
        isActive: true,
    },
    {
        id: 2,
        name: 'Radency',
        created: 'May 03, 2021',
        category: 'Idea',
        content: 'Internship from 2/5/2022 till 3/6/2022',
        isActive: true,
    },
    {
        id: 3,
        name: 'William Gaddis',
        created: 'May 07, 2021',
        category: 'Quote',
        content: "Power doesn't co...",
        isActive: true,
    },
    {   
        id: 4,
        name: 'Books',
        created: 'May 15, 2021',
        category: 'Task',
        content: "The Lean Startup",
        isActive: false,
    },
    {   
        id: 5,
        name: 'Project',
        created: 'May 15, 2021',
        category: 'Idea',
        content: "To create a project for my portfolio 4/15/2022",
        isActive: true,
    },
    {   
        id: 6,
        name: 'Covid',
        created: 'May 15, 2021',
        category: 'Random Thought',
        content: "Covid is not dangerous anymore",
        isActive: false,
    }
]

export let categories = [
    {
        name: 'Task',
        icon: 'task.svg'
    },
    {
        name: 'Random Thought',
        icon: 'thought.svg'
    },
    {
        name: 'Idea',
        icon: 'idea.svg'
    },
    {
        name: 'Quote',
        icon: 'quote.svg'
    }
]