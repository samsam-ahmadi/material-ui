import { expect } from 'chai';
import {
  generateUtilityClass,
  unstable_ClassNameGenerator as ClassNameGenerator,
} from '@mui/private-classnames';

describe('generateUtilityClass', () => {
  it('should generate the class correctly', () => {
    expect(generateUtilityClass('MuiTest', 'slot')).to.equal('MuiTest-slot');
  });

  it('should consider if slot should generate state class', () => {
    expect(generateUtilityClass('MuiTest', 'active')).to.equal('Mui-active');
    expect(generateUtilityClass('MuiTest', 'checked')).to.equal('Mui-checked');
    expect(generateUtilityClass('MuiTest', 'disabled')).to.equal('Mui-disabled');
    expect(generateUtilityClass('MuiTest', 'error')).to.equal('Mui-error');
    expect(generateUtilityClass('MuiTest', 'focused')).to.equal('Mui-focused');
    expect(generateUtilityClass('MuiTest', 'focusVisible')).to.equal('Mui-focusVisible');
    expect(generateUtilityClass('MuiTest', 'required')).to.equal('Mui-required');
    expect(generateUtilityClass('MuiTest', 'expanded')).to.equal('Mui-expanded');
    expect(generateUtilityClass('MuiTest', 'selected')).to.equal('Mui-selected');
  });

  describe('ClassNameGenerator', () => {
    afterEach(() => {
      ClassNameGenerator.reset();
    });

    it('able to set custom generator', () => {
      const generator = (name) => `foo-bar-${name}`;
      ClassNameGenerator.configure(generator);

      expect(generateUtilityClass('MuiTest', 'slot')).to.equal('foo-bar-MuiTest-slot');
    });

    it('does not affect state class', () => {
      const generator = (name) => `foo-bar-${name}`;
      ClassNameGenerator.configure(generator);

      expect(generateUtilityClass('MuiTest', 'active')).to.equal('Mui-active');
      expect(generateUtilityClass('MuiTest', 'checked')).to.equal('Mui-checked');
      expect(generateUtilityClass('MuiTest', 'disabled')).to.equal('Mui-disabled');
      expect(generateUtilityClass('MuiTest', 'error')).to.equal('Mui-error');
      expect(generateUtilityClass('MuiTest', 'focused')).to.equal('Mui-focused');
      expect(generateUtilityClass('MuiTest', 'focusVisible')).to.equal('Mui-focusVisible');
      expect(generateUtilityClass('MuiTest', 'required')).to.equal('Mui-required');
      expect(generateUtilityClass('MuiTest', 'expanded')).to.equal('Mui-expanded');
      expect(generateUtilityClass('MuiTest', 'selected')).to.equal('Mui-selected');
    });
  });
});
