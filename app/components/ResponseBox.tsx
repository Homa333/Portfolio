import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type ResponseBoxProps = {
  status: string;
  data: Record<string, unknown> | string | unknown[];
};

export default function ResponseBox({ status, data }: ResponseBoxProps) {
  return (
    <div className="mt-4">
      <p className="font-medium mb-2">{status}</p>
      <SyntaxHighlighter language="json" style={vscDarkPlus}>
        {typeof data === 'string' ? data : JSON.stringify(data, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
}
