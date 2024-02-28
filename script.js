//your JS code here. If required.
 // Data for the articles
        const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

        // Function to sort articles excluding specified words
        function sortArticles(bands) {
            const excludedWords = ['a', 'an', 'the'];

            return bands.sort((a, b) => {
                const cleanA = a.replace(/^(a|an|the) /i, '');
                const cleanB = b.replace(/^(a|an|the) /i, '');

                return cleanA.localeCompare(cleanB);
            });
        }

        // Sorting the articles
        const sortedBands = sortArticles(bands);

        // Creating the unordered list
        const ul = document.createElement('ul');
        ul.id = 'band';

        // Adding each article as a list item
        sortedBands.forEach(band => {
            const li = document.createElement('li');
            li.textContent = band;
            ul.appendChild(li);
        });

        // Appending the unordered list to the body
        document.body.appendChild(ul);
