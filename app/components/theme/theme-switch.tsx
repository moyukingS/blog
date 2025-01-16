import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center space-x-2">
      <Switch checked={theme === 'dark'} onCheckedChange={handleThemeChange} />
    </div>
  );
}
