export const timeout = async (timeout: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
};
