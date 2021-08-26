import render from '@testing-library/svelte';
import Footer from '../components/Footer.svelte';

describe('Footer', () => {
    test('component rendering', () => {
    const footer = render(Footer);
    console.log(footer);
    expect(footer.length).toEqual(1);})
});