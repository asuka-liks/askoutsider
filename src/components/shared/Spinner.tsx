interface SpinnerProps {
  size?: number;
  color?: string;
}

export default function Spinner({ size = 40, color = 'var(--color-terracotta)' }: SpinnerProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: `3px solid var(--color-sand)`,
        borderTopColor: color,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }}
    />
  );
}

// Add spin keyframes — injected via the component's first render side-effect is unreliable,
// so we include it in the animation CSS. It's already in animations.css but here inline:
const style = document.createElement('style');
style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
if (!document.querySelector('style[data-spin]')) {
  style.setAttribute('data-spin', '');
  document.head.appendChild(style);
}