// eslint.config.mjs
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,     // Standard JS recommended rules
  tseslint.configs.recommended     // TypeScript recommended rules
);

