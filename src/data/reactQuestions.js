export const questions = [
  {
    id: 1,
    title: "ReactJS Interview: Pagination Component",
    description:
      "You are tasked with building a pagination component in ReactJS. The component should handle the following:",
    sections: [
      {
        title: "1. Data Fetching & Display",
        items: [
          "Fetch data from an API and display it on the page.",
          "Display the data in a paginated format, showing only a limited number of items per page.",
        ],
      },
      {
        title: "2. Pagination Controls",
        items: [
          "Implement controls to navigate between pages.",
          "Ensure the first page does not allow navigation to a previous page.",
          "Ensure the last page does not allow navigation to a next page.",
        ],
      },
      {
        title: "3. Current Page and Total Pages",
        items: [
          "Display the current page number and total pages in the pagination controls.",
        ],
      },
      {
        title: "4. Pagination UI Placement",
        items: [
          "Ensure the pagination controls are placed below the displayed data.",
        ],
      },
    ],
    expectedBehavior: [
      "If the data has multiple items, display a specific number of items per page and allow navigation between pages.",
      "On the first page, prevent navigation to a previous page.",
      "On the last page, prevent navigation to a next page.",
    ],
  },
  {
    id: 2,
    title: "ReactJS Interview: Employee Data Handling",
    description:
      "You are tasked with building a ReactJS component that fetches and displays employee data with specific functionality and behavior:",
    sections: [
      {
        title: "1. Data Fetching & Display",
        items: [
          "Fetch employee data from an external API asynchronously.",
          "Filter the data based on specific criteria (e.g., employee age and salary).",
          "Display the filtered employee data in a table format.",
        ],
      },
      {
        title: "2. UI Behavior on Form Submission",
        items: [
          "Create a form that accepts employee-related data and has a submit action.",
          "On form submission, disable the submit button and show a processing message.",
        ],
      },
      {
        title: "3. Asynchronous Handling",
        items: [
          "Once data is fetched, display the information in the UI.",
          "If the data fetch takes longer than expected, display a relevant message indicating the delay.",
          "Log any errors or issues with the data fetch in the console.",
        ],
      },
      {
        title: "4. Timeout & Error Handling",
        items: [
          "Handle timeout scenarios when the API does not respond within a specified time and show an appropriate message on the UI.",
        ],
      },
      {
        title: "5. UI Updates & Button State",
        items: [
          "Re-enable the submit button once the processing is complete or an error occurs.",
          "Remove the processing message after the data is displayed or an error is handled.",
        ],
      },
    ],
    expectedBehavior: [
      "Ensure that the submit button is disabled while processing data.",
      "Display relevant messages when there are issues with data fetching or delays.",
      "Show employee data in a well-structured table once it is successfully fetched.",
    ],
  },
  {
    id: 3,
    title: "ReactJS Interview: User-Post Fetching Component",
    description:
      "You are tasked with building a React component that fetches and displays user data and their posts from an API. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Fetch a list of users from an API and display them in a dropdown or selection component.",
          "When a user is selected, fetch and display the posts related to that user.",
          "If the selected user has no posts, show a message indicating that no posts are available.",
        ],
      },
      {
        title: "3. UI Layout",
        items: [
          "Display the user selection dropdown at the top of the page.",
          "Below the dropdown, display the posts related to the selected user or a message indicating no posts if applicable.",
        ],
      },
    ],
    expectedBehavior: [
      "Initially, the list of users should be fetched and displayed.",
      "Once a user is selected, their posts should be displayed below the dropdown. If no posts are available, a message should be shown.",
    ],
  },
  {
    id: 4,
    title: "ReactJS Interview: Country and City Selector",
    description:
      "You are tasked with building a ReactJS component that fetches and displays country data from an API. The component should allow a user to select a country, and based on the selected country, show the cities of that country in a second dropdown.",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Fetch the list of countries from an external API (e.g., https://restcountries.com/v3.1/all).",
          "For each country, retrieve and display its name and country code.",
        ],
      },
      {
        title: "2. Country Selection",
        items: [
          "Create a dropdown list to allow the user to select a country.",
          "When a country is selected, fetch and display a list of cities related to that country.",
        ],
      },
      {
        title: "3. City Selection",
        items: [
          "Create a second dropdown that will display the cities of the selected country.",
          "Ensure the cities dropdown is only visible after a country is selected.",
        ],
      },
    ],
    expectedBehavior: [
      "The country dropdown should list all available countries.",
      "After selecting a country, the cities related to that country should be displayed in a second dropdown.",
      "If no cities are available for the selected country, no second dropdown should be displayed.",
    ],
  },
  {
    id: 5,
    title: "ReactJS Interview: Fetch and Display Country Data",
    description:
      "You are tasked with building a ReactJS component that fetches a list of countries from an API and displays information about each country such as name, capital, population, borders, and languages.",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Fetch the list of countries from an API endpoint (e.g., https://restcountries.com/v2/all).",
          "Each country object should include the country's name, capital, population, borders, and languages.",
        ],
      },
      {
        title: "2. Displaying Data",
        items: [
          "Display the country data in a list format.",
          "For each country, show the name, capital, population (with commas), borders (if available), and languages (if available).",
        ],
      },
    ],
    expectedBehavior: [
      "The app should fetch the country data once and display it in a readable format.",
      "The population should be displayed with commas for thousands (e.g., 1,000,000).",
      "If the borders or languages data is missing, display 'No borders' or 'No languages'.",
    ],
  },
  {
    id: 6,
    title: "ReactJS Interview: Fetch, Display, and Style Country Data",
    description:
      "You are tasked with building a ReactJS component that fetches a list of countries from an API and displays information about each country. The UI should be styled using CSS-in-JS techniques, making the data visually appealing.",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Fetch the list of countries from an API endpoint (e.g., https://restcountries.com/v2/all).",
          "Each country object should include the country's name, capital, population, borders, and languages.",
        ],
      },
      {
        title: "2. Displaying Data",
        items: [
          "Display the country data in a grid format.",
          "For each country, show the name, capital, population (with commas), borders (if available), and languages (if available).",
        ],
      },
      {
        title: "3. Styling",
        items: [
          "Style the list of countries. Each country should have a styled card with a background image of its flag, rounded corners, and a shadow effect.",
          "The card should display the country details in a clean, readable format with text aligned centrally.",
        ],
      },
    ],
    expectedBehavior: [
      "The app should fetch the country data once and display it in a visually appealing, styled format.",
      "Each country card should have a background image of the country's flag and a box shadow.",
      "The country details should be displayed in a clean, centered layout within the card.",
    ],
  },
  {
    id: 7,
    title: "ReactJS Interview: Utility Functions for Data Processing",
    description:
      "You are tasked with creating a ReactJS component that interacts with an API and performs various calculations based on the fetched data. The API endpoint is provided below.",
    sections: [
      {
        title: "1. Fetching Data",
        items: [
          "Write a React component that fetches data from the API (https://dummyjson.com/c/36fe-ab86-40ec-bca1) and stores it in state.",
          "Ensure that the component handles loading, success, and error states appropriately.",
        ],
      },
      {
        title: "2. Data Calculations",
        items: [
          "Create a function that calculates the total sum of all 'total' fields in the fetched data.",
          "Create a function that calculates the sum of all 'total' fields where 'credit' is false.",
          "Create a function that returns the buyer with the highest sale based on the 'total' value.",
        ],
      },
      {
        title: "3. Displaying Data",
        items: [
          "Display the fetched data in a meaningful way (e.g., a table or list).",
          "Display the results of the calculations (e.g., total sum, credit sum, highest buyer).",
        ],
      },
    ],
    expectedBehavior: [
      "The component should fetch data from the API and handle loading and error states.",
      "The data calculations should be accurate based on the fetched data.",
      "The results should be displayed clearly on the UI, with proper formatting.",
    ],
  },
  {
    id: 8,
    title: "ReactJS Interview: Todo App (Create, Update, Delete)",
    description:
      "You are tasked with building a simple Todo app using ReactJS. The app should allow users to add, edit, and delete tasks dynamically.",
    sections: [
      {
        title: "1. State Management",
        items: [
          "Use React's useState hook to manage the list of items, the current task input, and the index of the task being edited.",
        ],
      },
      {
        title: "2. Add Item",
        items: [
          "Implement functionality to add a new task to the list when the user submits the form.",
        ],
      },
      {
        title: "3. Edit Item",
        items: [
          "Implement functionality to allow the user to edit a task. When an item is clicked for editing, the input field should be populated with the task to be edited.",
        ],
      },
      {
        title: "4. Delete Item",
        items: [
          "Implement functionality to delete a task when the user clicks the delete button next to the task.",
        ],
      },
      {
        title: "5. UI Display",
        items: [
          "Display the list of tasks dynamically as the user adds, edits, or deletes items.",
          "For each task, show the task name along with 'Edit' and 'Delete' buttons.",
        ],
      },
    ],
    expectedBehavior: [
      "The user should be able to add new tasks to the list.",
      "The user should be able to edit an existing task.",
      "The user should be able to delete a task.",
      "The list of tasks should be dynamically updated on the UI with correct changes.",
    ],
  },
  {
    id: 9,
    title:
      "ReactJS Interview: Todo App (Create, Update, Delete with Title and Task)",
    description:
      "You are tasked with building a Todo application in ReactJS. The app should allow the user to create, update, and delete tasks, where each task has a title and a description. The task list should display both the title and the task details. Each task should have 'Edit' and 'Delete' buttons for modification or removal.",
    sections: [
      {
        title: "1. State Management",
        items: [
          "Use React's useState hook to manage the list of tasks, the title input, the task input, and the index of the task being edited.",
        ],
      },
      {
        title: "2. Input Fields",
        items: [
          "Create two input fields, one for the task title and another for the task description.",
          "Create a submit button that, when clicked, adds a task to the list with both the title and task details.",
        ],
      },
      {
        title: "3. Add Task",
        items: [
          "When the submit button is clicked, both the task title and description should be added to the list of tasks, showing the title along with the task description.",
        ],
      },
      {
        title: "4. Edit Task",
        items: [
          "When the 'Edit' button is clicked, the selected task's title and description should appear in the input fields, allowing the user to modify them.",
        ],
      },
      {
        title: "5. Delete Task",
        items: [
          "When the 'Delete' button is clicked, the selected task should be removed from the list.",
        ],
      },
      {
        title: "6. Display List",
        items: [
          "The task list should display each task with its title and description in a readable format.",
          "For each task, there should be 'Edit' and 'Delete' buttons to modify or remove tasks.",
        ],
      },
    ],
    expectedBehavior: [
      "The user should be able to enter both a title and description for each task.",
      "The task list should update dynamically as tasks are added, edited, or deleted.",
      "Each task should be editable, and the list should show updated values after modification.",
      "The user should be able to delete tasks from the list.",
      "The list should display both the title and the task description along with the respective buttons for editing and deleting.",
    ],
  },
  {
    id: 10,
    title: "ReactJS Interview: Timer Component (Start, Stop, Reset)",
    description:
      "You are tasked with building a Timer component in ReactJS. The component should be able to display elapsed time in seconds. It should also have Start/Stop functionality to start and pause the timer, along with a Reset button to reset the timer back to zero.",
    sections: [
      {
        title: "1. Timer Display",
        items: ["The timer should display the elapsed time in seconds."],
      },
      {
        title: "2. Start/Stop Button",
        items: [
          "Include a 'Start/Stop' button that starts the timer when clicked, and stops the timer when clicked again.",
        ],
      },
      {
        title: "3. Reset Button",
        items: [
          "Implement a 'Reset' button that resets the timer back to zero when clicked.",
        ],
      },
      {
        title: "4. State Management",
        items: [
          "Use React's useState and useEffect hooks to manage the timer state, including the elapsed time and timer running state.",
        ],
      },
      {
        title: "5. Timer Logic",
        items: [
          "The timer should count seconds when started, and the count should pause when the 'Stop' button is clicked.",
          "Ensure that the 'Reset' button resets the elapsed time to zero.",
        ],
      },
    ],
    expectedBehavior: [
      "The timer should display the time in seconds and be able to start and stop with the 'Start/Stop' button.",
      "Clicking 'Start' will begin the timer, and clicking it again will pause it.",
      "Clicking 'Reset' will reset the timer to zero, and the time should display as zero after resetting.",
      "Ensure the timer continues to count seconds while it is running.",
    ],
  },
  {
    id: 11,
    title: "ReactJS Interview: Fetch and Display Posts",
    description:
      "You are tasked with creating a React component that fetches data from an API (https://jsonplaceholder.typicode.com/posts) and displays the titles of all posts.",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Write a function that fetches data from the API (https://jsonplaceholder.typicode.com/posts)."
        ]
      },
      {
        title: "2. Display Data",
        items: [
          "Display the titles of all posts fetched from the API in a list format."
        ]
      },
      {
        title: "3. UI Layout",
        items: [
          "Ensure that each post's title is displayed clearly on the page."
        ]
      }
    ],
    expectedBehavior: [
      "The component should fetch post data from the API and display the titles of all posts in a list.",
      "Ensure proper handling of the API request and display the titles without errors."
    ]
  },
  {
    id: 12,
    title: "ReactJS Interview: Fetch and Display Random Dog Image",
    description:
      "You are tasked with creating a function in React that calls a public API (Dog API: https://dog.ceo/api/breeds/image/random) and displays a random dog image.",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Write a function that calls the Dog API (https://dog.ceo/api/breeds/image/random) to fetch a random dog image."
        ]
      },
      {
        title: "2. Display Image",
        items: [
          "Display the random dog image fetched from the API on the page."
        ]
      },
      {
        title: "3. UI Layout",
        items: [
          "Ensure that the image is displayed properly with the appropriate size and styling."
        ]
      }
    ],
    expectedBehavior: [
      "The component should fetch a random dog image from the Dog API and display it on the page.",
      "Ensure proper error handling in case the API call fails or returns no data."
    ]
  },
  {
    id: 13,
    title: "ReactJS Interview: Fetch User and Post Data by ID",
    description:
      "You are tasked with building a React app that fetches data from the JSONPlaceholder API. The app should be able to fetch a user's data by ID and a post's data by ID upon button clicks, and display the corresponding details.",
    sections: [
      {
        title: "1. Fetch User Data by ID",
        items: [
          "Create a button that, when clicked, fetches user data from https://jsonplaceholder.typicode.com/users/{id}, where {id} is the user ID passed dynamically.",
          "Display the user's details such as name, email, and address on the screen after fetching the data."
        ]
      },
      {
        title: "2. Fetch Post Data by ID",
        items: [
          "Create a button that, when clicked, fetches a specific post by ID from https://jsonplaceholder.typicode.com/posts/{id}.",
          "Display the title and body of the post after fetching the data."
        ]
      },
      {
        title: "3. UI Layout and Interaction",
        items: [
          "Ensure that both user and post data are displayed clearly on the page.",
          "Include error handling in case the API request fails or the data for a specific ID doesn't exist.",
          "Allow the user to dynamically input the ID for both the user and post and fetch their respective data."
        ]
      }
    ],
    expectedBehavior: [
      "When the user clicks on the button for fetching user data, the user's details should appear on the screen.",
      "When the user clicks on the button for fetching post data, the post's title and body should be displayed.",
      "Ensure that error handling is in place if the API request fails or returns no results."
    ]
  },
  {
    id: 14,
    title: "ReactJS Interview: GitHub Repository Search",
    description:
      "You are tasked with creating a React app that integrates with the GitHub API to search repositories based on user input.",
    sections: [
      {
        title: "1. GitHub Repository Search",
        items: [
          "Implement a search bar that fetches GitHub repositories using the endpoint `https://api.github.com/search/repositories?q={query}`.",
          "Display the repository name, description, and URL for each search result.",
          "The search bar should dynamically update the list of repositories as the user types in the query."
        ]
      }
    ],
    expectedBehavior: [
      "The GitHub repository search should dynamically fetch and display repositories as the user types in the search query.",
      "Each repository displayed should have its name, description, and URL visible."
    ]
  },
  {
    id: 15,
    title: "ReactJS Interview: Filterable User Table",
    description:
      "Create a React app that fetches a list of users from a public API and displays it in a filterable table.",
    sections: [
      {
        title: "1. User Table",
        items: [
          "Fetch a list of users from `https://jsonplaceholder.typicode.com/users?name={query}` based on the name query.",
          "Display the list of users in a table with columns such as 'Name', 'Email', and 'Phone'.",
          "Implement a filter input above the table to search for users by name. The table should update dynamically based on the filter."
        ]
      }
    ],
    expectedBehavior: [
      "The table should display users' details like Name, Email, and Phone.",
      "The table should filter users by name and update the displayed results dynamically as the user types in the filter input."
    ]
  },
  {
    id: 16,
    title: "ReactJS Interview: Fetch and Display Photos",
    description:
      "In this task, you will create a React component that fetches photos based on album ID and title from an API and displays them.",
    sections: [
      {
        title: "1. Fetch and Display Photos",
        items: [
          "Implement a React component that fetches a list of photos from `https://jsonplaceholder.typicode.com/photos?albumId={albumId}&title={title}` based on the album ID and title parameters.",
          "Display the photos in a grid or list format with each photo’s title and image.",
          "The component should handle scenarios where no photos match the given parameters."
        ]
      }
    ],
    expectedBehavior: [
      "The app should display a list or grid of photos based on the fetched data.",
      "Each photo should be displayed with its title and image.",
      "Handle edge cases where no photos are returned based on the query parameters."
    ]
  },
  {
    id: 17,
    title: "ReactJS Interview: Search Feature Implementation",
    description:
      "You are tasked with implementing a search feature in a ReactJS component. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Data Fetching & Display",
        items: [
          "Fetch data from an API and display it in a list format.",
          "Implement a search bar that allows users to filter the displayed data by name or title.",
          "The search should be case-insensitive and should update the displayed data in real-time as the user types.",
        ],
      },
      {
        title: "2. UI Behavior",
        items: [
          "Display the search bar at the top of the component.",
          "Below the search bar, show the filtered list of items based on the search query.",
        ],
      },
      {
        title: "3. Edge Case Handling",
        items: [
          "Ensure the UI handles cases when no search results are found by displaying a relevant message (e.g., 'No results found').",
        ],
      },
    ],
    expectedBehavior: [
      "Data should be fetched from the API and displayed in a list format.",
      "The search bar should filter data as the user types, and it should be case-insensitive.",
      "If no matching results are found, a message should be displayed informing the user.",
    ],
  },
  {
    id: 18,
    title: "ReactJS Interview: Combined Data Fetching and Sorting",
    description:
      "You are tasked with creating a ReactJS component that fetches data from two different APIs and sorts or groups the combined data. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Fetch data from two different APIs concurrently (e.g., country data and user data).",
          "Combine the fetched data from both APIs into a single list.",
          "Ensure that the fetched data is displayed initially after fetching.",
        ],
      },
      {
        title: "2. Sorting and Grouping",
        items: [
          "Allow the user to sort the combined data alphabetically (by name or title).",
          "Provide the option to group the data by category (e.g., countries and users).",
        ],
      },
      {
        title: "3. UI Layout",
        items: [
          "Display the sorting and grouping options (buttons) at the top of the component.",
          "Below the options, show the sorted or grouped data dynamically based on user interactions.",
        ],
      },
    ],
    expectedBehavior: [
      "Data from both APIs should be fetched and combined into a single list, displayed to the user.",
      "The user should be able to sort the data alphabetically or group it by category.",
      "The UI should update to reflect the selected sorting or grouping option.",
    ],
  },
  {
    id: 19,
    title: "ReactJS Interview: Accordion Implementation",
    description:
      "You are tasked with building an accordion component in ReactJS. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Accordion Structure",
        items: [
          "Create a component that renders a list of items, each of which can expand or collapse when clicked.",
          "Each item should have a title and content, where the content is hidden or shown upon clicking the title.",
        ],
      },
      {
        title: "2. UI Behavior",
        items: [
          "Only one item can be expanded at a time, meaning when a new item is clicked, the currently expanded item should collapse.",
          "If the same item is clicked again, it should collapse.",
        ],
      },
      {
        title: "3. Accessibility",
        items: [
          "Ensure the accordion is accessible, with proper ARIA attributes and keyboard navigation.",
        ],
      },
    ],
    expectedBehavior: [
      "The accordion should display items with titles and content.",
      "The accordion should allow only one item to be expanded at a time and collapse the current item when a new one is clicked.",
    ],
  },

  {
    id: 20,
    title: "ReactJS Interview: Fetch - Products Card Infinite Scroll",
    description:
      "You are tasked with implementing an infinite scroll feature for displaying products in a card layout. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Fetch product data from an API (e.g., product name, description, price, image).",
          "Implement infinite scroll, where more products are loaded when the user reaches the bottom of the page.",
        ],
      },
      {
        title: "2. UI Layout",
        items: [
          "Render each product in a card format, showing relevant information like name, description, price, and image.",
        ],
      },
      {
        title: "3. Scroll Behavior",
        items: [
          "Ensure the scroll fetches new data when the user reaches the bottom of the page.",
          "Handle loading states and prevent multiple requests while data is loading.",
        ],
      },
    ],
    expectedBehavior: [
      "The infinite scroll should work seamlessly, loading new products as the user scrolls down.",
      "Loading state should be handled correctly, and no additional requests should be sent while the data is being loaded.",
    ],
  },

  {
    id: 21,
    title: "ReactJS Interview: Fetch - Countries Card Infinite Scroll",
    description:
      "You are tasked with implementing an infinite scroll feature for displaying country information in a card layout. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Data Fetching",
        items: [
          "Fetch country data (e.g., name, population, region, flag) from an API.",
          "Implement infinite scroll to load more countries when the user reaches the bottom of the page.",
        ],
      },
      {
        title: "2. UI Layout",
        items: [
          "Render each country in a card format, displaying relevant details such as name, population, region, and flag.",
        ],
      },
      {
        title: "3. Scroll Behavior",
        items: [
          "Ensure new countries are fetched as the user scrolls to the bottom of the page.",
          "Handle loading state, and prevent multiple requests while data is loading.",
        ],
      },
    ],
    expectedBehavior: [
      "New country cards should be loaded as the user scrolls down.",
      "The UI should display country details in a neat and user-friendly card layout.",
    ],
  },

  {
    id: 22,
    title: "ReactJS Interview: Star Rating",
    description:
      "You are tasked with implementing a star rating component in ReactJS. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Rating Display",
        items: [
          "Render a number of stars based on a given rating value (e.g., a 5-star rating system).",
          "Each star should be clickable and update the rating when clicked.",
        ],
      },
      {
        title: "2. UI Behavior",
        items: [
          "Ensure that the star rating is interactive and updates in real-time when a user clicks on a star.",
          "When the user clicks on a star, the corresponding rating value should be set and displayed.",
        ],
      },
      {
        title: "3. Accessibility",
        items: [
          "Ensure the component is accessible with appropriate ARIA attributes for screen readers.",
        ],
      },
    ],
    expectedBehavior: [
      "The star rating should correctly reflect the rating value.",
      "The component should be interactive and update the rating when stars are clicked.",
    ],
  },

  {
    id: 23,
    title: "ReactJS Interview: Lifting the State Up",
    description:
      "You are tasked with demonstrating the concept of lifting state up in ReactJS. The component should meet the following requirements:",
    sections: [
      {
        title: "1. State Management",
        items: [
          "Create two components: a parent component and a child component.",
          "The parent component should manage the state, and the child component should receive and modify the state.",
        ],
      },
      {
        title: "2. State Update",
        items: [
          "When a user interacts with the child component, the parent component’s state should be updated.",
          "The updated state should be passed back to the child component to reflect the change.",
        ],
      },
    ],
    expectedBehavior: [
      "The parent component should manage and pass down state to the child component.",
      "The child component should update the state in the parent component upon user interaction, and the change should reflect in the child component.",
    ],
  },

  {
    id: 24,
    title: "ReactJS Interview: Render UI Conditionally",
    description:
      "You are tasked with demonstrating how to conditionally render UI elements in ReactJS based on different states. The component should meet the following requirements:",
    sections: [
      {
        title: "1. Conditional Rendering",
        items: [
          "Render different UI elements based on a condition (e.g., display a loading spinner, success message, or error message).",
          "Use conditional logic (e.g., if/else or ternary operators) to determine which UI elements to display.",
        ],
      },
      {
        title: "2. State Management",
        items: [
          "Create a state variable that controls the condition for rendering different UI elements.",
          "Update the state based on user actions or API responses.",
        ],
      },
    ],
    expectedBehavior: [
      "UI elements should be rendered conditionally based on state or props.",
      "Ensure that different UI elements (e.g., loading spinner, success/error messages) are displayed as per the condition.",
    ],
  },
  {
    id: 25,
    title: "ReactJS Interview: Display Wizards and Their Elixirs",
    description: 
      "You are tasked with building a ReactJS component that fetches a list of wizards and their elixirs from an API and displays them in a nested list format. Each wizard's name should be the main list item, and their elixirs should be displayed as a sublist under each wizard.",
    sections: [
      {
        title: "1. Data Fetching & Display",
        items: [
          "Fetch wizard data from the API (https://wizard-world-api.herokuapp.com/Wizards).",
          "Display the wizard names as the main list item.",
          "Display their elixirs as sublist items under each wizard."
        ]
      },
      {
        title: "2. Nested List Display",
        items: [
          "Ensure that each wizard’s elixirs are displayed correctly under their name.",
          "The elixirs should be displayed in a nested list format."
        ]
      }
    ],
    expectedBehavior: [
      "The component should correctly fetch and display wizard names.",
      "The elixirs of each wizard should be displayed in a nested list under the respective wizard."
    ]
  },  
];
