import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: ButtonVariant;
  children: ReactNode;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
    href?: undefined;
    type?: 'button' | 'submit' | 'reset';
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    type?: undefined;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--color-terracotta)',
    color: '#FDF6E3',
    border: 'none',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-terracotta)',
    border: '2px solid var(--color-terracotta)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--color-ink)',
    border: 'none',
  },
};

export default function Button({ variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 28px',
    borderRadius: 'var(--radius-full)',
    fontFamily: "'Noto Sans SC', sans-serif",
    fontSize: 'var(--text-base)',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.25s var(--ease-out-expo)',
    ...variantStyles[variant],
  };

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <a
        href={href}
        style={baseStyle}
        onMouseOver={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.background = 'var(--color-ember)';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-md)';
          } else if (variant === 'secondary') {
            e.currentTarget.style.background = 'var(--color-terracotta)';
            e.currentTarget.style.color = '#FDF6E3';
          } else {
            e.currentTarget.style.color = 'var(--color-terracotta)';
          }
        }}
        onMouseOut={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.background = 'var(--color-terracotta)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          } else if (variant === 'secondary') {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--color-terracotta)';
          } else {
            e.currentTarget.style.color = 'var(--color-ink)';
          }
        }}
        {...(rest as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}
      >
        {children}
      </a>
    );
  }

  const { type = 'button', ...rest } = props as ButtonAsButton;
  return (
    <button
      type={type}
      style={baseStyle}
      onMouseOver={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.background = 'var(--color-ember)';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.background = 'var(--color-terracotta)';
          e.currentTarget.style.color = '#FDF6E3';
        } else {
          e.currentTarget.style.color = 'var(--color-terracotta)';
        }
      }}
      onMouseOut={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.background = 'var(--color-terracotta)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        } else if (variant === 'secondary') {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = 'var(--color-terracotta)';
        } else {
          e.currentTarget.style.color = 'var(--color-ink)';
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
}