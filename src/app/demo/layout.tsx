import DemoLayout from "@/components/DemoLayout";

export default function DLayout({children}: { children: React.ReactNode }) {
  return (
    <DemoLayout>
      {children}
    </DemoLayout>
  );
}
