import { useTheme } from '../../theme/theme';
import {
  Container,
  Title,
  Card,
  Button,
  ControlGroup,
  Label,
  SliderRoot,
  SliderTrack,
  SliderRange,
  SliderThumb,
  CodeBlock,
} from './components';

export function ThemeEditorPage() {
  const { config, theme, updateConfig } = useTheme();

  return (
    <Container>
      <Title>🎨 Theme Playground</Title>
      
      <Card>
        <h2>Theme Controls</h2>
        <p style={{ marginBottom: '1rem', opacity: 0.8 }}>
          Move the sliders to see the theme update in real-time!
        </p>
        
        {/* Border Radius Control */}
        <ControlGroup>
          <Label>Border Radius: {config.radiusScale}px</Label>
          <SliderRoot
            value={[Math.min(config.radiusScale, 100)]}
            onValueChange={([v]) => updateConfig({ radiusScale: v })}
            min={0}
            max={100}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
          <div style={{ marginTop: '8px' }}>
            <Button onClick={() => updateConfig({ radiusScale: 0 })}>
              Square (0)
            </Button>
            <Button onClick={() => updateConfig({ radiusScale: 8 })}>
              Rounded (8)
            </Button>
            <Button onClick={() => updateConfig({ radiusScale: 9999 })}>
              Full Pill (9999)
            </Button>
          </div>
        </ControlGroup>
        
        {/* Primary Hue Control */}
        <ControlGroup>
          <Label>Primary Color Hue: {config.primaryHue}°</Label>
          <SliderRoot
            value={[config.primaryHue]}
            onValueChange={([v]) => updateConfig({ primaryHue: v })}
            min={0}
            max={360}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Spacing Control */}
        <ControlGroup>
          <Label>Spacing Unit: {config.spacingUnit}px</Label>
          <SliderRoot
            value={[config.spacingUnit]}
            onValueChange={([v]) => updateConfig({ spacingUnit: v })}
            min={2}
            max={12}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Font Size Control */}
        <ControlGroup>
          <Label>Base Font Size: {config.baseFontSize}px</Label>
          <SliderRoot
            value={[config.baseFontSize]}
            onValueChange={([v]) => updateConfig({ baseFontSize: v })}
            min={12}
            max={20}
            step={1}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Shadow Intensity Control */}
        <ControlGroup>
          <Label>Shadow Intensity: {(config.shadowIntensity * 100).toFixed(0)}%</Label>
          <SliderRoot
            value={[config.shadowIntensity * 100]}
            onValueChange={([v]) => updateConfig({ shadowIntensity: v / 100 })}
            min={0}
            max={100}
            step={5}
          >
            <SliderTrack>
              <SliderRange />
            </SliderTrack>
            <SliderThumb />
          </SliderRoot>
        </ControlGroup>
        
        {/* Color Pickers */}
        <ControlGroup>
          <Label>Background Color</Label>
          <input 
            type="color" 
            value={config.backgroundColor}
            onChange={(e) => updateConfig({ backgroundColor: e.target.value })}
            style={{ 
              width: '100%', 
              height: '40px', 
              cursor: 'pointer',
              border: '1px solid ' + theme.colors.border,
              borderRadius: theme.radii.small,
            }}
          />
        </ControlGroup>
        
        <ControlGroup>
          <Label>Text Color</Label>
          <input 
            type="color" 
            value={config.textColor}
            onChange={(e) => updateConfig({ textColor: e.target.value })}
            style={{ 
              width: '100%', 
              height: '40px', 
              cursor: 'pointer',
              border: '1px solid ' + theme.colors.border,
              borderRadius: theme.radii.small,
            }}
          />
        </ControlGroup>
        
        <ControlGroup>
          <Label>Shadow Color</Label>
          <input 
            type="color" 
            value={config.shadowColor}
            onChange={(e) => updateConfig({ shadowColor: e.target.value })}
            style={{ 
              width: '100%', 
              height: '40px', 
              cursor: 'pointer',
              border: '1px solid ' + theme.colors.border,
              borderRadius: theme.radii.small,
            }}
          />
        </ControlGroup>
      </Card>
      
      <Card>
        <h2>Component Examples</h2>
        <p style={{ marginBottom: '1rem' }}>
          These components automatically use theme values (with shadows!):
        </p>
        <Button onClick={() => alert('Button clicked!')}>Primary Button</Button>
        <Button onClick={() => alert('Another button!')}>Another Button</Button>
        
        <div style={{ marginTop: theme.spacing.lg }}>
          <h3 style={{ marginBottom: theme.spacing.sm }}>Shadow Examples:</h3>
          <div style={{ 
            padding: theme.spacing.md, 
            background: theme.colors.hover,
            borderRadius: theme.radii.medium,
            boxShadow: theme.shadows.sm,
            marginBottom: theme.spacing.sm,
          }}>
            Small Shadow (sm)
          </div>
          <div style={{ 
            padding: theme.spacing.md, 
            background: theme.colors.hover,
            borderRadius: theme.radii.medium,
            boxShadow: theme.shadows.md,
            marginBottom: theme.spacing.sm,
          }}>
            Medium Shadow (md)
          </div>
          <div style={{ 
            padding: theme.spacing.md, 
            background: theme.colors.hover,
            borderRadius: theme.radii.medium,
            boxShadow: theme.shadows.lg,
          }}>
            Large Shadow (lg)
          </div>
        </div>
      </Card>
      
      <Card>
        <h2>Current Theme Values</h2>
        <CodeBlock>{JSON.stringify(theme, null, 2)}</CodeBlock>
      </Card>
    </Container>
  );
}
