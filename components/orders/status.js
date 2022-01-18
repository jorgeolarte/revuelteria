export default function Status({ name }) {
  const STATUS = {
    received: "primary",
    success: "success",
    canceled: "danger",
    "in-process": "warning",
  };

  const MESSAGE = {
    received: "Recibido",
    success: "Entregado",
    canceled: "Cancelado",
    "in-process": "En proceso",
  };

  const DEFAULT = "primary";

  return (
    <span className={`bg-${STATUS[name]} rounded-full text-xs py-1 px-2`}>
      {MESSAGE[name]}
    </span>
  );
}
