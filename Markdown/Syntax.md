<link rel="stylesheet" href="../style.css">

# Markdown Syntax Guide

Markdown is a lightweight markup language for formatting text. Below is a guide to its most commonly used syntax.

## 1. Headings
Headings are created using `#` for different levels of headings.
- `#` creates an H1
- `##` creates an H2
- `###` creates an H3, and so on.

Example:
```md
# Heading 1
## Heading 2
### Heading 3
```

## 2. Bold and Italic
You can make text **bold** or *italic* using asterisks or underscores.

- Bold: `**bold**` or `__bold__`
- Italic: `*italic*` or `_italic_`

Example:
```md
This is **bold** text and this is *italic* text.
```

## 3. Blockquotes
To create blockquotes, use `>`.

Example:
```md
> This is a blockquote.
```

## 4. Lists

### Unordered Lists
Unordered lists are created using `-`, `+`, or `*`.

Example:
```md
- Item 1
- Item 2
- Item 3
```

### Ordered Lists
Ordered lists are created using numbers followed by periods.

Example:
```md
1. First item
2. Second item
3. Third item
```

## 5. Links
To add a link, use `[link text](URL)`.

Example:
```md
[OpenAI](https://www.openai.com)
```

## 6. Images
To add an image, use `![alt text](image URL)`.

Example:
```md
![Markdown logo](https://markdown-here.com/img/icon256.png)
```

## 7. Code Blocks and Inline Code

### Inline Code
To add inline code, wrap the code in backticks (\`).

Example:
```md
This is `inline code`.
```

### Code Blocks
For code blocks, use triple backticks (\```).

Example:
```md
```
This is a code block.
```
```

## 8. Horizontal Rules
To create a horizontal rule, use three or more hyphens (`---`), asterisks (`***`), or underscores (`___`).

Example:
```md
---
```

## 9. Tables
To create tables, use pipes (`|`) and hyphens (`-`) to structure the table.

Example:
```md
| Column 1 | Column 2 |
|----------|----------|
| Row 1    | Data 1   |
| Row 2    | Data 2   |
```

## 10. Task Lists
You can create checkboxes using `- [ ]` for unchecked boxes and `- [x]` for checked boxes.

Example:
```md
- [x] Task 1
- [ ] Task 2
```

## 11. Footnotes
Markdown also supports footnotes, though not all parsers do. To add a footnote, use `[^1]` to reference, and define it at the bottom of the document.

Example:
```md
Here is a footnote reference[^1].

[^1]: This is the footnote content.
```

## 12. Strikethrough
To strikethrough text, use `~~`.

Example:
```md
This is ~~strikethrough~~ text.
```

---

This guide covers most of the commonly used Markdown syntax features. Happy writing!
