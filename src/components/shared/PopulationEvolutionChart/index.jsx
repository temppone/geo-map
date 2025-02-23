import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Tooltip as TooltipChakra } from "@/components/ui/tooltip";
import { Box, IconButton } from "@chakra-ui/react";
import { ChartColumn, ChartLine } from "lucide-react";

export const PopulationEvolutionChart = ({ data }) => {
  const { t } = useTranslation(["home"]);
  const [type, setType] = useState("line");

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Box display="flex" flexDirection="row" gap={1}>
        <TooltipChakra content={t("home:showLineChart")}>
          <IconButton
            colorPalette="green"
            onClick={() => setType("line")}
            variant={type === "line" ? "solid" : "outline"}
          >
            <ChartLine />
          </IconButton>
        </TooltipChakra>

        <TooltipChakra content={t("home:showBarChart")}>
          <IconButton
            colorPalette="green"
            onClick={() => setType("bar")}
            variant={type === "bar" ? "solid" : "outline"}
          >
            <ChartColumn />
          </IconButton>
        </TooltipChakra>
      </Box>
      {type === "line" ? (
        <LineChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="ano"
            label={{
              value: t("home:years"),
              position: "insideBottomRight",
              offset: -5,
              fill: "#666",
            }}
            tick={{ fill: "#666" }}
          />
          <YAxis
            tickFormatter={(value) => value.toLocaleString()}
            tick={{ fill: "#666" }}
            domain={["auto", "dataMax + 100"]}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="populacao"
            stroke="#38A169"
            name={t("home:population")}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      ) : (
        <BarChart width={300} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="ano"
            label={{
              value: t("home:years"),
              position: "insideBottomRight",
              offset: -5,
              fill: "#666",
            }}
            tick={{ fill: "#666" }}
          />
          <YAxis
            tickFormatter={(value) => value.toLocaleString()}
            tick={{ fill: "#666" }}
            domain={["auto", "dataMax + 1000"]}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="populacao" fill="#38A169" name={t("home:population")} />
        </BarChart>
      )}
    </Box>
  );
};

PopulationEvolutionChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ano: PropTypes.string.isRequired,
      populacao: PropTypes.number.isRequired,
    })
  ).isRequired,
};
