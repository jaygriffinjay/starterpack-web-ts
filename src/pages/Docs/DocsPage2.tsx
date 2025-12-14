import styled from '@emotion/styled';
import {
  Heading,
  Paragraph,
  List,
  ListItem,
  Code,
  Blockquote,
  Callout,
  Divider,
  Stack,
} from '../../components/Primitives';
import { CodeBlock } from '../../components/CodeBlock/CodeBlock';
import dedent from 'dedent';

const Container = styled.div`
  padding: ${props => props.theme.spacing.xl};
  max-width: 900px;
  margin: 0 auto;
`;

const Meta = styled.div`
  color: ${props => props.theme.colors.text};
  opacity: 0.6;
  font-size: ${props => props.theme.fontSizes.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export function DocsPage2() {
  return (
    <Container>
      <Stack spacing="xl">
        <div>
          <Heading level={1}>Building a CodeBlock Component with VSC Dark Plus Theme</Heading>
          <Meta>December 13, 2025 • Development Log</Meta>
        </div>

        <Paragraph>
          Today was all about improving the documentation experience in this bootstrap repo. 
          The goal: create a beautiful, syntax-highlighted code block component that uses the 
          VSC Dark Plus theme—because let's be honest, it's the best theme.
        </Paragraph>

        <Divider />

        {/* The Journey Begins */}
        <section>
          <Heading level={2}>The Problem</Heading>
          <Paragraph>
            We had a basic <Code>CodeBlock</Code> component in <Code>Primitives.tsx</Code>, but it was 
            pretty bland. No syntax highlighting, no copy button, just plain monospaced text. 
            For a bootstrap repo that's meant to be AI-friendly and visually appealing, we needed better.
          </Paragraph>

          <Callout type="info">
            The original component was fine for simple examples, but when you're showing actual code 
            with proper syntax, you need proper highlighting to make it readable.
          </Callout>
        </section>

        <Divider />

        {/* The Solution */}
        <section>
          <Heading level={2}>The Solution: Prism.js + Emotion</Heading>
          
          <Paragraph>
            We decided to build a new CodeBlock component from scratch using:
          </Paragraph>

          <List>
            <ListItem><strong>Prism.js</strong> for syntax highlighting</ListItem>
            <ListItem><strong>VSC Dark Plus theme</strong> converted to Emotion styles</ListItem>
            <ListItem><strong>Emotion css prop</strong> for styling</ListItem>
            <ListItem><strong>Separate styles file</strong> for clean separation of concerns</ListItem>
          </List>

          <Heading level={3}>Component Structure</Heading>
          <Paragraph>
            The component lives in <Code>src/components/CodeBlock/</Code> with two files:
          </Paragraph>

          <CodeBlock language="text" showLineNumbers>
{dedent`
  src/components/CodeBlock/
    ├── CodeBlock.tsx        # Main component
    └── CodeBlock.styles.ts  # All styling
`}
          </CodeBlock>
        </section>

        <Divider />

        {/* Key Features */}
        <section>
          <Heading level={2}>Key Features</Heading>

          <Heading level={3}>1. Multiple Language Support</Heading>
          <Paragraph>
            We set up Prism.js to support the most common languages for web development:
          </Paragraph>

          <CodeBlock language="typescript" showLineNumbers>
{dedent`
  import Prism from 'prismjs';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/components/prism-jsx';
  import 'prismjs/components/prism-tsx';
  import 'prismjs/components/prism-css';
  import 'prismjs/components/prism-markup';
`}
          </CodeBlock>

          <Heading level={3}>2. Copy Button with Feedback</Heading>
          <Paragraph>
            Every code block gets a copy button in the header that shows a checkmark for 2 seconds 
            after copying. No more manually selecting and copying code!
          </Paragraph>

          <CodeBlock language="typescript">
{dedent`
  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
`}
          </CodeBlock>

          <Heading level={3}>3. Language Header</Heading>
          <Paragraph>
            Each code block displays its language in the header, making it immediately clear 
            what you're looking at.
          </Paragraph>

          <Heading level={3}>4. VSC Dark Plus Theme</Heading>
          <Paragraph>
            We converted the entire VSC Dark Plus theme (273 lines of CSS!) into Emotion styles 
            with proper token coloring for all language constructs.
          </Paragraph>
        </section>

        <Divider />

        {/* Challenges */}
        <section>
          <Heading level={2}>Challenges We Hit</Heading>

          <Heading level={3}>Problem 1: Prism.js Loading Order</Heading>
          <Paragraph>
            Initially got errors about Prism not being defined. The language components were 
            loading before the main Prism library.
          </Paragraph>
          <Callout type="warning">
            <strong>Solution:</strong> Move all Prism.js imports to the CodeBlock component itself 
            to ensure correct loading order.
          </Callout>

          <Heading level={3}>Problem 2: Theme Conflicts</Heading>
          <Paragraph>
            The default <Code>prism.css</Code> theme was still being imported in <Code>Primitives.tsx</Code>, 
            overriding our VSC Dark Plus theme with a light theme.
          </Paragraph>
          <Callout type="success">
            <strong>Solution:</strong> Remove the old Prism CSS import from Primitives since we're 
            using Emotion styles now.
          </Callout>

          <Heading level={3}>Problem 3: No Scrolling</Heading>
          <Paragraph>
            Code blocks weren't scrolling horizontally when content was too wide. Turns out there 
            was a mystery <Code>overflow: hidden</Code> style being applied somewhere.
          </Paragraph>
          <Callout type="success">
            <strong>Solution:</strong> Added <Code>overflow: auto !important</Code> to the pre tag 
            styles to force scrolling.
          </Callout>

          <Heading level={3}>Problem 4: Shell Escaping Hell</Heading>
          <Paragraph>
            When trying to commit, the commit message had "overflow: auto !important" which caused 
            zsh to freak out because exclamation marks trigger history expansion.
          </Paragraph>
          <Blockquote>
            "zsh: event not found: important"
          </Blockquote>
          <Callout type="info">
            <strong>Solution:</strong> Keep commit messages simple and avoid special characters. 
            Or use single quotes. Classic shell gotcha!
          </Callout>
        </section>

        <Divider />

        {/* Meta Moment */}
        <section>
          <Heading level={2}>The Meta Moment</Heading>
          
          <Paragraph>
            While building this component, we discovered a hilarious bug: Prism.js has trouble 
            parsing escaped template literals in code strings. When we tried to show an example 
            of template literal syntax, the parser would:
          </Paragraph>

          <List ordered>
            <ListItem>Make semicolons float above the code</ListItem>
            <ListItem>Strip newlines from inside the template literal</ListItem>
            <ListItem>Generally make things look broken</ListItem>
          </List>

          <Paragraph>
            This became a perfect example of why <strong>inline code strings are problematic</strong>. 
            We couldn't even display the code to explain the problem without hitting the problem!
          </Paragraph>

          <Callout type="warning">
            This is exactly why approaches like Vite's <Code>?raw</Code> imports exist—to avoid 
            having to escape actual code as strings.
          </Callout>
        </section>

        <Divider />

        {/* Architecture Decisions */}
        <section>
          <Heading level={2}>Architecture Decisions</Heading>

          <Heading level={3}>Emotion css prop vs styled-components</Heading>
          <Paragraph>
            We used Emotion's <Code>css</Code> prop instead of <Code>styled-components</Code> for 
            this component. This required configuring both TypeScript and Vite:
          </Paragraph>

          <CodeBlock language="typescript">
{dedent`
  // tsconfig.app.json
  {
    "compilerOptions": {
      "jsx": "react-jsx",
      "jsxImportSource": "@emotion/react"
    }
  }
`}
          </CodeBlock>

          <CodeBlock language="typescript">
{dedent`
  // vite.config.ts
  export default defineConfig({
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
      }),
    ],
  });
`}
          </CodeBlock>

          <Heading level={3}>Separate Styles File</Heading>
          <Paragraph>
            Instead of putting all the CSS in the component file, we created <Code>CodeBlock.styles.ts</Code>. 
            This keeps the component logic clean and makes the styles reusable.
          </Paragraph>

          <Paragraph>
            The styles file exports theme objects using Emotion's <Code>css</Code> utility:
          </Paragraph>

          <CodeBlock>
{dedent`
  import { css } from '@emotion/react';

  export const codeBlockTheme = css\`
    pre[class*="language-"] {
      color: #d4d4d4;
      background: #1e1e1e;
      // ... 270 more lines of VSC Dark Plus token colors
    }
  \`;
`}
          </CodeBlock>
        </section>

        <Divider />

        {/* What We Shipped */}
        <section>
          <Heading level={2}>What We Shipped</Heading>

          <List>
            <ListItem>✅ CodeBlock component with Prism.js syntax highlighting</ListItem>
            <ListItem>✅ VSC Dark Plus theme (273 lines of carefully converted CSS)</ListItem>
            <ListItem>✅ Copy button with SVG icons and state management</ListItem>
            <ListItem>✅ Language header showing the programming language</ListItem>
            <ListItem>✅ Separate styles file for clean architecture</ListItem>
            <ListItem>✅ Support for JS, TS, JSX, TSX, CSS, HTML</ListItem>
            <ListItem>✅ Horizontal scrolling for long lines</ListItem>
            <ListItem>✅ Removed old CodeBlock from Primitives</ListItem>
            <ListItem>✅ Updated DocsPage and ThemeEditorPage to use new component</ListItem>
            <ListItem>✅ Added dedent library for clean multiline strings</ListItem>
            <ListItem>✅ Documented the Prism.js template literal bug</ListItem>
          </List>
        </section>

        <Divider />

        {/* Dependencies */}
        <section>
          <Heading level={2}>New Dependencies</Heading>
          
          <CodeBlock language="json">
{dedent`
  {
    "dependencies": {
      "prismjs": "^1.30.0",
      "@types/prismjs": "^1.26.5",
      "dedent": "^1.7.0"
    }
  }
`}
          </CodeBlock>
        </section>

        <Divider />

        {/* Reflections */}
        <section>
          <Heading level={2}>Reflections</Heading>

          <Blockquote>
            "The best documentation tools are the ones that make you want to write documentation."
          </Blockquote>

          <Paragraph>
            This component is now part of the bootstrap repo's DNA. Every doc page can use beautiful, 
            syntax-highlighted code blocks with zero effort. The AI can generate pages with properly 
            formatted code examples. And developers (me) actually want to write docs because they 
            look great.
          </Paragraph>

          <Paragraph>
            That's the whole point of this bootstrap repo: make the good thing the easy thing.
          </Paragraph>
        </section>

        <Divider />

        {/* What's Next */}
        <section>
          <Heading level={2}>What's Next</Heading>

          <Paragraph>
            Future ideas for this component:
          </Paragraph>

          <List>
            <ListItem>Line numbers (prop exists but not implemented)</ListItem>
            <ListItem>Line highlighting for specific ranges</ListItem>
            <ListItem>Diff support (show additions/deletions)</ListItem>
            <ListItem>More language support as needed</ListItem>
            <ListItem>Maybe a plain text theme toggle?</ListItem>
          </List>

          <Paragraph>
            But for now, it does exactly what we need. Ship it and move on to the next thing.
          </Paragraph>
        </section>

        <Divider />

        <Callout type="success">
          <Paragraph>
            <strong>Commit:</strong> "Add CodeBlock component with Prism.js syntax highlighting and VSC Dark Plus theme"
          </Paragraph>
          <Paragraph style={{ marginBottom: 0 }}>
            9 files changed, 582 insertions(+), 102 deletions(-)
          </Paragraph>
        </Callout>
      </Stack>
    </Container>
  );
}
