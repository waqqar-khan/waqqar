export const questions = [
    {
        id: 1,
        title: "ReactJS Coding Interview Question: Pagination Component",
        description: "You are tasked with building a Pagination component in ReactJS. The component should handle the following:",
        sections: [
            {
                title: "1. Data Fetching & Display",
                items: [
                    "Fetch data from an API and display it on the page.",
                    "Display the list of data on the UI, showing only 10 items per page."
                ]
            },
            {
                title: "2. Pagination Controls",
                items: [
                    "Add Previous and Next buttons for navigation between pages.",
                    "The Previous button should not allow navigation when on the first page.",
                    "The Next button should not allow navigation when on the last page."
                ]
            },
            {
                title: "3. Current Page and Total Pages",
                items: [
                    "Display the current page and the total number of pages between the Previous and Next buttons in the format: Page 1 of 20."
                ]
            },
            {
                title: "4. Pagination UI Placement",
                items: [
                    "The pagination controls should be visible below the list of data."
                ]
            }
        ],
        expectedBehavior: [
            "If the data array has 100 items, there should be 10 pages, with 10 items per page.",
            "On page 1, the Previous button should not allow navigation.",
            "On the last page (e.g., page 10), the Next button should not allow navigation."
        ]
    },
    // Add more questions here
];
