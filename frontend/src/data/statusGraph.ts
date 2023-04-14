export const statusData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, "0")}:00`,
    status: Math.random() < 0.5 ? 0 : 1,
}));
