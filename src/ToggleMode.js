import React from 'react';
import { ThemeConsumer } from 'styled-components';

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {theme => (
        <label class="switch">
        <input type="checkbox"
          variant="primary"
          onClick={e =>
            theme.setTheme(
              theme.mode === 'dark'
                ? { ...theme, mode: 'light' }
                : { ...theme, mode: 'dark' }
            )
          }
        >
          
        </input>
        <span class="slider round"></span>
        </label>
      )}
    </ThemeConsumer>
  );
}
