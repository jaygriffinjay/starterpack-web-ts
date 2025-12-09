import styled from '@emotion/styled';
import {
  Heading,
  Paragraph,
  Text,
  List,
  ListItem,
  Link,
  Code,
  CodeBlock,
  Blockquote,
  Callout,
  Divider,
  Stack,
} from '../../components/Primitives';

const Container = styled.div`
  padding: ${props => props.theme.spacing.xl};
  max-width: 900px;
  margin: 0 auto;
`;

export function DocsPage() {
  return (
    <Container>
      <Stack spacing="xl">
        <div>
          <Heading level={1}>📚 Bootstrap Repo Philosophy</Heading>
          <Paragraph>
            <Text variant="caption">
              A reusable foundation for spinning up new projects fast, with visual dev tools and AI-ready documentation components
            </Text>
          </Paragraph>
        </div>

        <Divider />

        {/* Why This Exists */}
        <section>
          <Heading level={2}>Why This Exists</Heading>
          <Paragraph>
            This repo is designed to be copied and reused across multiple projects. The goal: spend
            less time on boilerplate and more time building actual features.
          </Paragraph>

          <Heading level={3}>The Problem</Heading>
          <Blockquote>
            Every new project starts the same way: set up React, configure tooling, build basic
            components, create a design system... then finally start on the actual product idea.
          </Blockquote>

          <Heading level={3}>The Solution</Heading>
          <Paragraph>
            A bootstrap repo with everything pre-configured. Copy it, adjust the theme, and start
            building features immediately. No more "npm create vite" followed by two days of setup.
          </Paragraph>

          <List>
            <ListItem>
              <strong>Visual Theme Editor</strong> - Pick colors and spacing visually, see
              changes instantly across all components
            </ListItem>
            <ListItem>
              <strong>Documentation Components</strong> - Pre-built primitives ready for AI to
              use when generating project docs
            </ListItem>
            <ListItem>
              <strong>Dev-Only Routes</strong> - Tools that exist in development but are
              automatically removed from production builds
            </ListItem>
            <ListItem>
              <strong>Proven Patterns</strong> - Routes as data, feature-based structure, component
              scoping - all the architecture decisions already made
            </ListItem>
          </List>
        </section>

        <Divider />

        {/* Visual Learning Philosophy */}
        <section>
          <Heading level={2}>Visual Learning & AI Assistance</Heading>
          
          <Heading level={3}>The Beautiflyzer Vision</Heading>
          <Paragraph>
            This repo is the foundation for the "AI Output Beautiflyzer" - a system where AI
            generates explanations and documentation, but outputs them as beautiful, interactive
            pages instead of walls of text.
          </Paragraph>

          <CodeBlock language="typescript" showLineNumbers>
{`// Instead of this:
AI.explain("How does this theme system work?")
// → Returns 500 lines of markdown text

// We want this:
AI.explain("How does this theme system work?")
// → Returns structured data
// → Parser renders with our components
// → Beautiful interactive docs appear`}
          </CodeBlock>

          <Callout type="info">
            AI is great at understanding code and explaining concepts, but terrible at making
            things visually understandable. We handle the visual part with pre-built components.
          </Callout>

          <Heading level={3}>Why Visual Learning Matters</Heading>
          <Paragraph>
            Some people are visual learners. Reading "this function takes a theme object" doesn't
            click. But seeing a live example with adjustable sliders? That's instant understanding.
          </Paragraph>

          <List>
            <ListItem>
              <strong>Live Code Playgrounds</strong> - Not just syntax-highlighted code, but
              editable, runnable examples
            </ListItem>
            <ListItem>
              <strong>Interactive Demos</strong> - Sliders, color pickers, toggle switches to
              see how changes affect output
            </ListItem>
            <ListItem>
              <strong>Visual Documentation</strong> - Show, don't tell. Callouts, blockquotes,
              and code examples working together
            </ListItem>
          </List>
        </section>

        <Divider />

        {/* Component Library for AI */}
        <section>
          <Heading level={2}>Components Built for AI Generation</Heading>
          
          <Heading level={3}>The "Markdown Philosophy"</Heading>
          <Paragraph>
            Markdown is useful not because of its syntax, but because it constrains you to ~8-10
            essential elements. This constraint forces clear thinking about information hierarchy.
          </Paragraph>

          <Paragraph>
            We recreated that constraint as React components. AI can compose these to create
            documentation without writing any actual HTML/CSS.
          </Paragraph>

          <Heading level={3}>Current Primitives</Heading>
          <List ordered>
            <ListItem>
              <Code>Heading</Code> (levels 1-6) - Semantic hierarchy
            </ListItem>
            <ListItem>
              <Code>Paragraph</Code> & <Code>Text</Code> - Body content with variants
            </ListItem>
            <ListItem>
              <Code>List</Code> & <Code>ListItem</Code> - Ordered/unordered with proper styling
            </ListItem>
            <ListItem>
              <Code>Link</Code> - Themed anchor tags
            </ListItem>
            <ListItem>
              <Code>Code</Code> & <Code>CodeBlock</Code> - Inline and block code with line numbers
            </ListItem>
            <ListItem>
              <Code>Blockquote</Code> - Highlighted quotes
            </ListItem>
            <ListItem>
              <Code>Callout</Code> - Info/success/warning/error messages
            </ListItem>
            <ListItem>
              <Code>Divider</Code> - Visual section breaks
            </ListItem>
            <ListItem>
              <Code>Stack</Code> & <Code>Inline</Code> - Layout primitives
            </ListItem>
          </List>

          <Heading level={3}>What's Still Needed</Heading>
          <Callout type="warning">
            These components are planned but not implemented yet.
          </Callout>

          <List>
            <ListItem>
              <strong>Interactive CodeBlock</strong> - Editable code with live preview and
              syntax highlighting (Prism.js or Shiki)
            </ListItem>
            <ListItem>
              <strong>Tabs</strong> - For showing multiple examples/approaches (Radix already installed)
            </ListItem>
            <ListItem>
              <strong>Accordion</strong> - Collapsible sections for long content (Radix installed)
            </ListItem>
            <ListItem>
              <strong>Table</strong> - For API references and prop documentation
            </ListItem>
            <ListItem>
              <strong>Image with Caption</strong> - Diagrams and screenshots
            </ListItem>
            <ListItem>
              <strong>Badge/Tag</strong> - Labels like "deprecated", "new", "beta"
            </ListItem>
            <ListItem>
              <strong>API Reference</strong> - Formatted function signatures with parameter descriptions
            </ListItem>
          </List>
        </section>

        <Divider />

        {/* Theme Playground */}
        <section>
          <Heading level={2}>Theme Playground as Dev Tool</Heading>
          
          <Paragraph>
            The theme editor isn't just a demo - it's a practical tool for starting new projects.
          </Paragraph>

          <Heading level={3}>Workflow</Heading>
          <List ordered>
            <ListItem>Copy this bootstrap repo for a new project</ListItem>
            <ListItem>
              Open <Code>/theme-editor</Code> in dev mode
            </ListItem>
            <ListItem>Adjust colors, spacing, shadows, border radius with visual controls</ListItem>
            <ListItem>See changes apply to ALL components in real-time</ListItem>
            <ListItem>
              Theme automatically saves to localStorage - persists across page refreshes
            </ListItem>
            <ListItem>Once happy with the look, export the config values</ListItem>
            <ListItem>
              Paste into <Code>themeData.ts</Code> as the new <Code>defaultConfig</Code>
            </ListItem>
            <ListItem>Start building actual features with your custom theme</ListItem>
          </List>

          <Callout type="success">
            This visual approach is way faster than manually tweaking values in code, refreshing,
            and checking results.
          </Callout>

          <Heading level={3}>Why Generative Themes?</Heading>
          <Paragraph>
            Instead of hardcoding every color shade and spacing value, the theme generator creates
            them from a small config:
          </Paragraph>

          <CodeBlock language="typescript" showLineNumbers>
{`// You set these 3 values
primaryHue: 220      // Blue
spacingUnit: 8       // Base unit
radiusScale: 8       // Rounded corners

// System generates 50+ values
colors: { primary, background, text, border, hover }
spacing: { xs, sm, md, lg, xl }
radii: { small, medium, large, full }
fontSizes: { xs, sm, base, lg, xl, xxl, xxxl }
shadows: { sm, md, lg }`}
          </CodeBlock>

          <Paragraph>
            This means one slider movement changes multiple related values simultaneously,
            maintaining visual consistency automatically.
          </Paragraph>
        </section>

        <Divider />

        {/* Architecture Patterns */}
        <section>
          <Heading level={2}>Patterns Worth Copying</Heading>

          <Heading level={3}>Routes as Data</Heading>
          <Paragraph>
            Define routes as an array of objects instead of scattered JSX. This enables filtering,
            transformation, and conditional routes.
          </Paragraph>

          <CodeBlock language="typescript" showLineNumbers>
{`export const routes = [
  { path: '/', component: HomePage, devOnly: false },
  // Dev routes only exist in development
  ...(import.meta.env.DEV ? [
    { path: '/theme-editor', component: ThemeEditorPage, devOnly: true },
    { path: '/docs', component: DocsPage, devOnly: true },
  ] : []),
];`}
          </CodeBlock>

          <Callout type="info">
            Dev-only components are completely removed from production builds through tree-shaking.
            Zero runtime checks needed.
          </Callout>

          <Heading level={3}>Feature-Based Structure</Heading>
          <Paragraph>
            Instead of organizing by file type (all components in one folder), organize by feature.
            Each page/feature owns its components.
          </Paragraph>

          <CodeBlock showLineNumbers>
{`pages/
  ThemeEditor/
    ThemeEditorPage.tsx
    components.tsx        # Only ThemeEditor uses these
  Docs/
    DocsPage.tsx
components/
  Primitives.tsx          # Shared across ALL pages`}
          </CodeBlock>

          <Heading level={3}>Structured CSS Data</Heading>
          <Paragraph>
            Use CSSObject (structured data) instead of template literal strings. Better for
            AI collaboration, visual editors, and tooling.
          </Paragraph>

          <CodeBlock language="typescript" showLineNumbers>
{`// Instead of template literals
const Button = styled.button\`
  padding: \${props => props.theme.spacing.md};
  color: \${props => props.theme.colors.primary};
\`;

// Use object syntax
const buttonStyles: CSSObject = {
  padding: theme.spacing.md,
  color: theme.colors.primary,
};`}
          </CodeBlock>
        </section>

        <Divider />

        {/* Natural Language Control */}
        <section>
          <Heading level={2}>Future: Natural Language Control</Heading>
          
          <Paragraph>
            The ultimate goal is making apps controllable through lazy natural language instead of
            precise UI interactions.
          </Paragraph>

          <Blockquote>
            Imagine telling your calendar app: "Make sure to add this meeting, set a reminder
            30 minutes before, add John's email in the notes, and mark it as important"
            — and it just does it.
          </Blockquote>

          <Paragraph>
            This bootstrap repo is designed to support that vision. Clean component primitives,
            clear data structures, and visual feedback make it easier for AI to generate and
            manipulate interfaces.
          </Paragraph>

          <Callout type="success">
            Already proven this works with a time-block planner that responds to natural language
            prompts and schedules multiple events way faster than manual UI manipulation.
          </Callout>
        </section>

        <Divider />

        {/* Quick Links */}
        <section>
          <Heading level={2}>Quick Links</Heading>
          <List>
            <ListItem>
              <Link href="/">🏠 Home</Link> - Main landing page
            </ListItem>
            <ListItem>
              <Link href="/theme-editor">🎨 Theme Editor</Link> - Visual theme customization tool
            </ListItem>
          </List>
        </section>
      </Stack>
    </Container>
  );
}
