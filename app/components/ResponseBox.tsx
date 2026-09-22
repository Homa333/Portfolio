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

      <div className="overflow-auto max-w-full rounded bg-[#1e1e1e] text-white text-sm p-4 font-mono whitespace-pre-wrap break-words">
        <SyntaxHighlighter
          language="json"
          style={vscDarkPlus}
          customStyle={{
            backgroundColor: 'transparent',
            margin: 0,
            padding: 0,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
          codeTagProps={{
            style: {
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            },
          }}
        >
          {typeof data === 'string' ? data : JSON.stringify(data, null, 2)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
