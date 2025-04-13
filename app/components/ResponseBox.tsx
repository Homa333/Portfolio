import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ResponseBox({
  status,
  data,
}: {
  status: string;
  data: any;
}) {
  return (
    <div className="mt-4">
      <p className="font-medium mb-2">{status}</p>
      <SyntaxHighlighter language="json" style={vscDarkPlus}>
        {JSON.stringify(data, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
}
