import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';
import { Heading, Paragraph, Stack, Text } from '../../components/Primitives';

const Container = styled.div`
  padding: ${props => props.theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${props => props.theme.colors.hover};
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radii.medium};
  padding: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.lg};
`;

const StyledLink = styled(RouterLink)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export function HomePage() {
  return (
    <Container>
      <Stack spacing="lg">
        <Heading level={1}>🚀 Starterpack Web TypeScript</Heading>
        
        <Card>
          <Stack spacing="md">
            <Heading level={2}>Welcome</Heading>
            <Paragraph>
              This is a modern React + TypeScript starter with a generative theme system,
              Radix UI primitives, and Emotion for styling.
            </Paragraph>
          </Stack>
        </Card>
        
        <Card>
          <Stack spacing="md">
            <Heading level={2}>Pages</Heading>
            <Stack spacing="sm">
              <div>
                <StyledLink to="/docs">📚 Documentation</StyledLink>
                <Paragraph>
                  <Text variant="caption">
                    Architecture overview, design decisions, and component documentation
                  </Text>
                </Paragraph>
              </div>
              <div>
                <StyledLink to="/theme-editor">🎨 Theme Editor</StyledLink>
                <Paragraph>
                  <Text variant="caption">
                    Interactive playground for testing and customizing the theme system
                  </Text>
                </Paragraph>
              </div>
            </Stack>
          </Stack>
        </Card>
        
        <Card>
          <Stack spacing="md">
            <Heading level={2}>Tech Stack</Heading>
            <Stack as="ul" spacing="xs">
              <li>⚛️ React 19</li>
              <li>📘 TypeScript</li>
              <li>🎨 Emotion (CSS-in-JS)</li>
              <li>🧩 Radix UI Primitives</li>
              <li>⚡ Vite</li>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
