// Only change code below this line
function urlSlug(title) {
return title.toLowerCase().trim().split(/\s+/).join("-");

}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");



/* 
The `urlSlug` function is designed to take a `title` string and convert it into a URL-friendly slug.

- `.toLowerCase()` : This method is used to convert the entire `title` string to lowercase. It ensures that all characters in the resulting slug will be in lowercase, which is a common practice for URLs.
- `.trim()` : The `trim` method is used to remove leading and trailing whitespace (spaces, tabs, or line breaks) from the `title` string.
    - This step ensures that there are no unwanted spaces at the begninning or the end of the slug.
- `.split(/\s+/)` : The `split` method is applied to the trimmed string with a regular expression (Regex) as the argument `(/\s+/)`.
    - This Regex matches one or more whitespace characters. In essence, it splits the trimmed string into an array of words based on one or more whitespace characters.
        - Ex: if the `title` is "This is a title," this step would result in an array like `["this", "is", "a", "title"]`.
- `.join("-")` : The `join` method is used to join the array of words into a single string, using a hyphen (`-`) as the separator.
    - This effectively creates a slug by joining the words with hyphens. For the example function in the problem, it would produce the string "a-mind-needs-books-like-a-sword-needs-whetstone"

    To summarize:
        The `urlSlug` function takes a `title`, converts it to lowercase, removes leading and trailing whitespace, splits it into words using whitespace as the delimiter,
        then joins those words back together with hyphens to create a URL-friendly slug. 
*/