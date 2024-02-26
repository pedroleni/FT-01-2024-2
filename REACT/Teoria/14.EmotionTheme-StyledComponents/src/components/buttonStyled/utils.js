export const getVariants = (theme, variant) => {
  switch (variant) {
    case "small":
      return getSmallVariant(theme);

    case "large":
      return getLargeVariant(theme);

    case "extraLarge":
      return getExtraLargeVariant(theme);

    case "medium":
    default:
      return getMediumVariant(theme);
  }
};

const getSmallVariant = (theme) => ({
  width: theme.spacing(12.5),
  backgroundColor: theme.palette.button.dark,
  border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(2.5),
});

const getMediumVariant = (theme) => ({
  width: theme.spacing(18.7),
  height: theme.spacing(18),
  backgroundColor: theme.palette.button.dark,
  border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(2.5),
});

const getLargeVariant = (theme) => ({
  width: theme.spacing(25),
  height: theme.spacing(18),
  backgroundColor: theme.palette.button.dark,
  border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(2.5),
});

const getExtraLargeVariant = (theme) => ({
  width: theme.spacing(31),
  height: theme.spacing(18),
  backgroundColor: theme.palette.button.dark,
  border: `${theme.spacing(0.35)} solid ${theme.palette.border.main}`,
  borderRadius: theme.spacing(2.5),
});
