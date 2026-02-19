import { Helmet } from "react-helmet-async";

interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

const SchemaOrg = ({ schema }: SchemaOrgProps) => {
  const schemas = Array.isArray(schema) ? schema : [schema];
  return (
    <Helmet>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SchemaOrg;
