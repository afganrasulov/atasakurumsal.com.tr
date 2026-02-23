import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
    it('children metnini renderlar', () => {
        render(<Button>Tıkla</Button>);
        expect(screen.getByRole('button', { name: 'Tıkla' })).toBeInTheDocument();
    });

    it('varsayılan olarak primary variant uygular', () => {
        render(<Button>Test</Button>);
        const btn = screen.getByRole('button');
        expect(btn.className).toContain('bg-slate-900');
    });

    it('secondary variant doğru class uygular', () => {
        render(<Button variant="secondary">İkincil</Button>);
        const btn = screen.getByRole('button');
        expect(btn.className).toContain('bg-white');
    });

    it('disabled durumunu destekler', () => {
        render(<Button disabled>Pasif</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('özel className eklenebilir', () => {
        render(<Button className="custom-class">Özel</Button>);
        const btn = screen.getByRole('button');
        expect(btn.className).toContain('custom-class');
    });
});
