"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useTeamDirectoryStore } from "../../stores/teamStore";
import { TextField, Select, MenuItem, Button, Box, InputAdornment } from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";

export default function TeamFilters() {
  const t = useTranslations("teamDirectory");
  const { filters, setSearch, setRole, resetFilters } = useTeamDirectoryStore();
  const [searchInput, setSearchInput] = useState(filters.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, setSearch]);

  const hasActiveFilters = filters.search || filters.role;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        mb: 3,
        p: 3,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}
    >
      <TextField
        fullWidth
        placeholder={t("filters.searchPlaceholder")}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          },
        }}
      />

      <Select
        value={filters.role}
        onChange={(e) => setRole(e.target.value)}
        displayEmpty
        sx={{
          minWidth: 200,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
          '&.Mui-focused': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
          },
        }}
      >
        <MenuItem value="">{t("filters.roleFilter")}</MenuItem>
        <MenuItem value="Admin">Admin</MenuItem>
        <MenuItem value="Agent">Agent</MenuItem>
        <MenuItem value="Creator">Creator</MenuItem>
      </Select>

      {hasActiveFilters && (
        <Button
          variant="contained"
          onClick={resetFilters}
          startIcon={<ClearIcon />}
          sx={{
            background: 'linear-gradient(45deg, #ef4444 30%, #ec4899 90%)',
            boxShadow: '0 3px 5px 2px rgba(239, 68, 68, 0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #dc2626 30%, #db2777 90%)',
              boxShadow: '0 4px 8px 2px rgba(239, 68, 68, 0.4)',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.2s',
          }}
        >
          {t("filters.clearFilters")}
        </Button>
      )}
    </Box>
  );
}

